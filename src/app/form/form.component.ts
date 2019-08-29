import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: [ './form.component.scss' ]
})
export class FormComponent implements OnInit {
	details = [];
	name: string = '';
	age: string = '';
	constructor() {}

	ngOnInit() {}

	handleInput(e) {
		const name = e.target.name;
		this[name] = e.target.value;
	}

	handleAdd() {
		const detailsObj = {
			name: this.name,
			age: this.age
		};
		this.details.push(detailsObj);
		this.name = '';
		this.age = '';
	}
}
