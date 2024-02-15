import { Component, OnInit } from '@angular/core';
import { FbService } from '../fb.service';
import { Companies } from '../companies';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  companies: Companies [];

  constructor(
    private db: FbService,
  ) { }

  ngOnInit() {
    //get companies from database
    this.db.getCompanies().subscribe(
      data => {
        this.companies = data;
      }
    );
  }

}
