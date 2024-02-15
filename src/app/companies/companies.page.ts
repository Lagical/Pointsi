import { Component, OnInit } from '@angular/core';
import { FbService } from '../fb.service'
import { Companies } from '../companies';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss'],
})
export class CompaniesPage implements OnInit {

  companies: Companies [];
  company: string;
  selected: Companies;
  companyList: any [];

  constructor(
    private db: FbService,
    private menu: MenuController) { }

  ionViewWillEnter() {
      this.menu.enable(false);
  }

  ionViewDidLeave() {
      this.menu.enable(true);
  } 

  ngOnInit(){
    //get companies from database
    this.db.getCompanies().subscribe(
      data => {
        this.companies = data;
        this.companyList = data;
      }
    );
   
  }

  initCompanies(){
    this.companies = this.companyList;
  }

  /*method to search company by typing letters, 
  all the companies will with matching letters will be displayed others hidden */
  listCompanies(event){
    this.initCompanies();
    const search = event.srcElement.value;
    if (!search) {
      return;
    }
    this.companies = this.companies.filter(current => {
      if (current.company_name && search) {
        if (current.company_name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  /*method used to pass selected company to different pages using selectCompany
  method on fb service */
  select(amnt){
    this.company = amnt.company_name
    this.selected = amnt;
    this.db.selectCompany(this.selected)
  }

}
