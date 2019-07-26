import { Component, OnInit } from '@angular/core';
import { Astro} from '../astro'
import { DataService} from '../data.service'
import {Subscription} from "rxjs";


@Component({
  selector: 'descpage',
  templateUrl: './descpage.component.html',
  styleUrls: ['./descpage.component.css'],
  providers:[DataService]
  
})
export class DescpageComponent implements OnInit {
  peopleAstro:Astro[]=[];
  selectedAstro:Astro;
  toggleForm:boolean=false;

  constructor(private dataservice: DataService ) { }

  getAstro(){
    this.dataservice.getAstroDetails()
     .subscribe( astro=>{
       this.peopleAstro=astro
       console.log('data form dataservice' + this.peopleAstro[0].astroName)
     });

  
  }
  addAstro(form){

    let newAstro:Astro={
      
      astroName:form.value.astroName,
      astroDesc:form.value.astroDesc,
      astroStone:form.value.astroStone,
      provider:form.value.provider

    }
    this.dataservice.addAstroDetails(newAstro)
     .subscribe(astro=>{
       console.log(astro);
       this.getAstro();
     });
  }

  deleteAstro(id){
    this.dataservice.deleteAstroDetails(id)
    .subscribe(astro=>{
      console.log(astro);
      if(astro.n==1){
        for(var i=0;i<this.peopleAstro.length;i++){
          if(id==this.peopleAstro[i]._id){
            this.peopleAstro.splice(i,1);
          }
        }
      }
    })
  
  
  
  
  }

  editAstro(form){
    let newAstro:Astro={
      _id:this.selectedAstro._id,
      astroName:form.value.astroName,
      astroDesc:form.value.astroDesc,
      astroStone:form.value.astroStone,
      provider:form.value.provider

    }
    this.dataservice.updateAstroDetails(newAstro)
    .subscribe(astro=>{console.log("The put method is call"+ astro)
  this.getAstro();
});
this.toggleForm=!this.toggleForm
  }

  showEditForm(astro){
    this.selectedAstro=astro;
    this.toggleForm=!this.toggleForm
  }




  ngOnInit() {
    this.getAstro();
    
  }

}