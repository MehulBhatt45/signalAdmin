import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Observable, interval, Subscription } from 'rxjs';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	p: any;
	userFilter: any = { fullName: '' };
	allUsers: any = [];
	constructor(private _adminService: AdminService) {
	}
	message: any;
	ngOnInit() {
		this.getAllUSers();
	}

	getAllUSers() {
		this._adminService.getAllUsers().subscribe((res: any) => {
			this.allUsers = res.data;
		}, err => {
			console.log(err);
		});
	}

	deleteUser(id, model) {
		Swal.fire({
			title: 'Are you sure?',
			text: 'This action will temporary delete this user, you can restore it from deleted users',
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			console.log(result.value);
			if (result.value) {
				this._adminService.deleteRecord(id).subscribe((res: any) => {
					console.log(res);
					this.ngOnInit();
				}, err => {
					console.log(err);
				});
			}
		});
	}

	restoreUser(id, model) {
		Swal.fire({
			title: 'Are you sure?',
			text: 'You want to restore this user.',
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, restore it!'
		}).then((result) => {
			console.log(result.value);
			if (result.value) {
				this._adminService.restoreRecord(id).subscribe((res: any) => {
					console.log(res);
					this.ngOnInit();
				}, err => {
					console.log(err);
				});
			}
		});
	}

}
