import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  public host:string='http://localhost:8080';

  constructor(private httpClient:HttpClient) { }

  public getcours(page:number,size:number){
    return this.httpClient.get(this.host+'/cours?page='+ page+ '&size='+ size);
  }
///byDesignationPage
  public getCoursByKeyword(mc:String,page:number,size:number){
    return this.httpClient.get(this.host+'/cours/search/byDesignationPage?mc='+mc+'&page='+page+'&size='+size);
  }
  public deleteResource(url : any=""){
    return this.httpClient.delete(url);
  }
  public saveResource(url :any,data :any){
    return this.httpClient.post(url,data);

  }
}
