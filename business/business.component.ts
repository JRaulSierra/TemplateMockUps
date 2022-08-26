import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit,OnDestroy {
  //grid-list configuration
  showData = {
    name1: 'email',
    name2: 'name',
    showOtherData:false,
    flag:'',
    text:['','']
  };
  statusData = {
    show: true,
    pos: 0,
    flag: 'true'
  };
  isLoading = false;
  fullData;
  data = [
    {email: 'mchavez@is4tech.com', name: 'Marlon Chávez', status: true },
    {email: 'mchavez@is4tech.com', name: 'Marlon Chávez', status: true },
    {email: 'mchavez@is4tech.com', name: 'Marlon Chávez', status: true },
  ];
  startingCurrentPage = 0;
  element = [];
  isNew = true;
  ngDestroyBusiness = new Subject<void>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.ngDestroyBusiness.complete();
    this.ngDestroyBusiness.next();
  }

  emmiterGridList(obj:any){
    if (obj.tipo === 'element'){
      this.element = obj.action
      this.isNew = false;
    }
  }

  setIsNew(){
    this.isNew = true;
  }

  getData(){

  }

}
