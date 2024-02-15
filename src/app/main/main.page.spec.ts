import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from "@angular/common/http";
import { DebugElement } from "@angular/core";
import { By } from '@angular/platform-browser';

import { MainPage } from './main.page';

describe('MainPage', () => {
  let component: MainPage;
  let fixture: ComponentFixture<MainPage>;
  let debugEl: DebugElement;
  let htmlEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientModule
      ]
    }).compileComponents();

    beforeEach(inject([MainPage], (MainPage) => {
      const article: any = {
        title: "Test Title",
        content: "Test content",
      };
      fixture = TestBed.createComponent(MainPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }));

    fixture = TestBed.createComponent(MainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  afterEach(() => {
    component = null;
    fixture.destroy();
    debugEl = null; 
    htmlEl = null; 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //we seriously dont know what we are doing 
  //but atleast we tried ¯\_(ツ)_/¯
  
  it("should contain title on header", () => {
    debugEl = fixture.debugElement.query(By.css('ion-title'));
    htmlEl = debugEl.nativeElement;
    expect(htmlEl.textContent).toContain("Pointsi");
  });
  
  it("should have back button in header", () =>{
    debugEl = fixture.debugElement.query(By.css('ion-back-button'));
    htmlEl = debugEl.nativeElement; 
    expect(htmlEl.textContent).toContain
  });

  it("should contain credits on the page", () => {
    debugEl = fixture.debugElement.query(By.css('ion-card-title'));
    htmlEl = debugEl.nativeElement;
    expect(debugEl.properties.src).toContain("Pisteet: ")
  });
 
  it("should have post button in footer", () =>{
    debugEl = fixture.debugElement.query(By.css('ion-button'));
    htmlEl = debugEl.nativeElement; 
    expect(htmlEl.textContent).toContain
  });
 
  it("should have background image", () =>{
    debugEl = fixture.debugElement.query(By.css('ion-img'));
    htmlEl = debugEl.nativeElement; 
    expect(htmlEl.textContent).toEqual("Triangles.png")
  });

});
