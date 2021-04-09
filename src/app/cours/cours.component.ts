import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { CoursService } from '../services/cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['/cours.component.css']
})
export class CoursComponent implements OnInit {

  public cours : any;
  public size: number=5;
  public currentPage: number=0;
  public totalPages: number=0;
  public pages:Array<number>=new Array();
  public currentkeyword: String="";

  constructor(private coursService : CoursService) { }

  ngOnInit(): void {
  }

  onGetCours(){
    this.coursService.getcours(this.currentPage,this.size)
    .subscribe((data:any) =>{
      this.cours = data;
      this.totalPages=data['page'].totalPages;
      this.pages=new Array<number>(this.totalPages);
      this.cours = data;
    }, err => {
      console.log(err);
    })
  }
  onPageCour(i:any){
    this.currentPage=i;
    this.ChercherCours();
  }
  onChercher(form: any){ 
    this.currentPage= 0;   
    this.currentkeyword = form.keyword;    
    this.ChercherCours();
  }
  ChercherCours(){    
      this.coursService.getCoursByKeyword(this.currentkeyword,this.currentPage,this.size)
     .subscribe((data:any) =>{      
        this.totalPages=data['page'].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.cours = data;
        },err => {     
            console.log(err);
          }
      )
  }
  onDeleteCour(c : any){
    let conf=confirm("Etes vous sure ?");
    if(conf){
      console.log(c);
      this.coursService.deleteResource(c._links.self.href)
      .subscribe(data=>{
        this.ChercherCours();
      },err=>{
        console.log(err);
      })
    }
  }
}
