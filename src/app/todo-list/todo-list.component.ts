import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: [ './todo-list.component.scss' ]
})
export class TodoListComponent implements OnInit {
	todoList: Array<any> = [];
	desc: string = '';
	title: string = '';
	count: number = -1;
	showTodo: boolean = false;
	constructor() {}

	ngOnInit() {}
	ngAfterContentInit() {
		if (localStorage.getItem('todoList')) this.todoList = JSON.parse(localStorage.getItem('todoList'));
	}

	handleInput(e) {
		const name = e.target.name;
		this[name] = e.target.value;
	}

	handleAdd() {
		this.count = this.count + 1;
		const toDoObj = {
			desc: this.desc,
			title: this.title,
			type: 'todo',
			id: this.count
		};
		this.todoList.push(toDoObj);
		this.desc = '';
		this.title = '';
		localStorage.setItem('todoList', JSON.stringify(this.todoList));
	}

	filterItemsOfType(type) {
		return this.todoList.filter((x) => x.type === type);
	}
	handleStageChange(type, index) {
		this.todoList[index].type = type;
		localStorage.setItem('todoList', JSON.stringify(this.todoList));
	}
	handleRemove(index) {
		this.todoList.splice(index, 1);
		localStorage.setItem('todoList', JSON.stringify(this.todoList));
	}
	handleView(type) {
		type === 'mytodo' ? (this.showTodo = true) : (this.showTodo = false);
	}
}
