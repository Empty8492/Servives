import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import * as $ from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public domain:string='http://localhost:8001/'; 
  
  public arr :any[]=[];
  
 public get(api:string):any[]{
   let arr:any[]=[];

    $.ajax({
      url: this.domain+api,
      type: "get",
      async:false,
      success: function (data) {
        let jsondata = JSON.parse(data);
        arr=jsondata;
        console.log(arr)
    
      },
      error:function () {
        
      }
    })
  

    return arr ;

}
}
