import { Injectable } from '@angular/core';
import { IDepartement } from '../model/deparetement.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  api = environment.baseURL;
  constructor(private http: HttpClient) { }

  getAllDepartement(): Observable<IDepartement[]> {
    return this.http.get<IDepartement[]>(this.api + '/departements')
  }
  saveDepartement(departement: IDepartement): Observable<IDepartement> {
    return this.http.post<IDepartement>('http://localhost:8080/departements', departement);
  }
}
