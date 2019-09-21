import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from './config';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.get(config.baseApiUrl + 'get-all-user').pipe(
      map(res => {
        return res;
      })
    );
  }

  deleteRecord(id) {
    return this.http.delete(config.baseApiUrl + `delete-user/` + id).pipe(
      map((res) => {
        Swal.fire(
          'Deleted!',
          'User has been deleted.',
          'success'
        );
        return res;
      }));
  }

  restoreRecord(id) {
    return this.http.get(config.baseApiUrl + `restore-user/` + id).pipe(
      map((res) => {
        return res;
      }));
  }

  getAllPartnershipApplications() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.get(config.baseApiUrl + 'get-all-partnership-application').pipe(
      map(res => {
        return res;
      })
    );
  }

  getSinglePartnershipApplication(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this.http.get(config.baseApiUrl + 'get-partnership-application/' + id).pipe(
      map(res => {
        return res;
      })
    );
  }
}
