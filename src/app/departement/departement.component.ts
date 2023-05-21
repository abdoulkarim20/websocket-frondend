import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DepartementService } from './departement.service';
import { StompService } from '../helpers/stomp.service';
import { IDepartement } from '../model/deparetement.model';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  departements!: IDepartement[]
  constructor(private formBuilder: FormBuilder,
    private departementService: DepartementService,
    private stompService: StompService) { }

  ngOnInit(): void {
    console.log("real time app");

    this.getAllDepartements();
    this.stompService.subscribe('/topic/departements', (): any => {
      console.log("Nous remarquons un changement");
      this.getAllDepartements();
    })
  }
  save() {
    //this.store.dispatch(invokSaveDepartementAPI({departement:{...this.saveDepartement}}));
    const departement = this.saveDepartement.value;
    console.log(departement);
    this.departementService.saveDepartement(departement).subscribe({
      next: (res) => {
        this.saveDepartement.reset({});
        console.log('success', res);
      },
      error: (err) => {
        console.log('error', err)
      }
    });
  }
  saveDepartement = this.formBuilder.group({
    libelle: ["", Validators.required]
  })
  getAllDepartements() {
    this.departementService.getAllDepartement().subscribe({
      next: (res) => {
        console.log("les departements", res);
        this.departements = res
      },
      error: (err) => {
        console.log("les error ", err);
      }
    })
  }

}
