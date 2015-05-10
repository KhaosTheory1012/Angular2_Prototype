/// <reference path="./../../angular2/angular2.d.ts"/>
/* tslint:disable */
import {Component,View,bootstrap,For,If} from 'angular2/angular2';
import {EmployeeResource} from './employeeResource';
import {Employee} from 'employee';

@Component ({
    selector: 'employeecontroller'
})

@View ({
    templateUrl: "html_templates/employee_template.html",
    directives: [For]
})
/* tslint:enable */
export class EmployeeController {
    employee: Employee;
    employeeMock: EmployeeResource = new EmployeeResource();

    constructor() {
        this.employee = this.employeeMock.getPersonalById(1337);
    }

    getPersonal(id: number): void {
        this.employee = this.employeeMock.findPersonalById(id);
    }
}

bootstrap(EmployeeController);