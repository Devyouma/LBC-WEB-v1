import { Component, OnInit } from '@angular/core';
import { CoursService } from '../services/cours.service';

@Component({
  selector: 'app-new-cour',
  templateUrl: './new-cour.component.html',
  styleUrls: ['./new-cour.component.css']
})
export class NewCourComponent implements OnInit {

  constructor(private coursService: CoursService) { }

  ngOnInit(): void {
  }
  onSaveCour(data: any){
    console.log(this.coursService.host);
    console.log(data);
    this.coursService.saveResource(this.coursService.host+"/cours",data)
    .subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }

}
