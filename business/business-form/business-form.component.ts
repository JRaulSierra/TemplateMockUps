import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuditShow} from "@app/shared/models/audit";
import { Subject } from "rxjs";

@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.scss']
})
export class BusinessFormComponent implements OnInit, OnChanges, OnDestroy {
  @Output() setNew= new EventEmitter<any>();
  @Input() elementSelected = {};
  @Input() isNew = true;
  ngDestroyBusiness = new Subject<void>();
  form: FormGroup;
  //audit
  AUDIT_COMPONENT: AuditShow[] = [
    {type: 'label', text: 'Creación',
      fields: [
        {type: 'field', text: 'Usuario', property: 'userCreate'},
        {type: 'field', text: 'Fecha', property: 'creationDate'},
      ]
    },
    {type: 'label', text: 'Última Modificación',
      fields: [
        {type: 'field', text: 'Usuario', property: 'userUpdate'},
        {type: 'field', text: 'Fecha', property: 'updateDate'},
      ]
    }
  ];
  auditDataDt: any;
  isOpen = false;


  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnDestroy(): void {
    this.ngDestroyBusiness.complete();
    this.ngDestroyBusiness.next();
  }

  createForm(){
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      phones: new FormControl('', Validators.required),
      state: new FormControl()
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.isNew===false || changes.elementSelected){
      //this is test data its used only to show the audit component
      this.auditDataDt = [{data:'23'},{data:'23'}]
    }else if (this.isNew === true){
    }
  }

  setIsNew(){
    this.form.reset()
    this.setNew.emit();
  }

}
