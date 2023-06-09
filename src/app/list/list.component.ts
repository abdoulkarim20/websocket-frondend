import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DepartementService } from '../departement/departement.service';
import { StompService } from '../helpers/stomp.service';
import { IDepartement } from '../model/deparetement.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  departements!: IDepartement[]
  constructor(
    private departementService: DepartementService,
    private stompService: StompService) { }

  ngOnInit(): void {
    this.getAllDepartements();
    this.stompService.subscribe('/topic/departements', (): any => {
      /*Nous devons creer un tableau afin de creer des notification 
      et les stocker dans le local storage afin qu'il soit aficher dans un 
      tableau pour que l'utilisateur puisse les voir et les supprimer s'il veut*/
      this.getAllDepartements();
    })
  }
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
