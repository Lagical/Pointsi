import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Companies } from './companies';
import { Users } from './users';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FbService {

  companiesCollection: AngularFirestoreCollection<Companies>;
  companies: Observable<Companies[]>;
  usersCollection: AngularFirestoreCollection<Users>;
  users: Observable<Users[]>;
  selectedc: Companies;
  user: Users;

  constructor(
    private af: AngularFirestore,
    private afAuth: AngularFireAuth) {
    //gets all data of the companies from database to this.companies
    this.companiesCollection = af.collection<Companies>('companies');
    this.companies = this.companiesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    //gets all data of the users from database to this.users
    this.usersCollection = af.collection<Users>('users');
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   }
  
   //stores new user and data to database when registering
   storeUser(result, username, credits){
     this.af.doc(`users/${result.user.uid}`).set({
       username,
       credits
     })
   }
  
  //sets user data when logged in
  setUser(user: Users){
    this.user = user;
  }

  //method for getting user id
  getUID(){
    //checks if user is logged in and gets uid of the logged user
    if(!this.user){
      if(this.afAuth.auth.currentUser){
        const user = this.afAuth.auth.currentUser
        this.setUser({
          username: user.email.split('@')[0],
          credits: this.user.credits,
          uid: user.uid,
        })
        return user.uid
      } else {
        throw new Error("Käyttäjä ei ole kirjautunut sisään")
      }
    } else {
      return this.user.uid;
    }
  }

  //method returns list of all companies in database
  getCompanies(): Observable<Companies[]> {
    return this.companies;
  }

  //method for getting user by user id from database
  getUser(): Observable<Users> {
    return this.usersCollection.doc<Users>(this.getUID()).valueChanges().pipe(
      take(1),
      map(users => {
        users.uid
        return users;
      })
    );
  }

  //method for setting selected company for use in other pages
  selectCompany(select: Companies){
    this.selectedc = select;
  }

  //method for updating star values to database
  starsUpdate(company: Companies): Promise<void> {
    return this.companiesCollection.doc(company.id).update({
      stars: 
      company.stars });
  }

  //method for updating the median of the stars to database
  medianUpdate(company: Companies): Promise<void> {
    return this.companiesCollection.doc(company.id).update({
      median: 
      company.median});
  }
}
