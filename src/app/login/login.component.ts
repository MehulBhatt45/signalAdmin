import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	constructor(private loginService: LoginService, private router: Router) { }

	submitted = false;

	registerForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', Validators.required),
	});
	ngOnInit() {

	}
	msg: string = null;
	message: any;
	errmsg: string = null;
	loading = false;

	user = {
		email: "",
		password: ""
	}

	handleCaptcha(event) {
		console.log("EVENT =======================>", event);
		this.registerForm.controls.recaptcha.setValue(event);
	}

	login(detail) {
		this.loading = true;
		this.loginService.authorize(detail).subscribe((res: any) => {
			localStorage.setItem("users", JSON.stringify(res));
			localStorage.setItem("token", JSON.stringify(res.token));
			this.msg = 'Logged in successfully! ';
			this.router.navigate(['/dashboard']);
		}, err => {
			console.log("error", err);
			this.errmsg = 'Incorrect info!';
			this.loading = false;
		})
	}
}
