/**
 * Created by Jan on 07.05.2015.
 */
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'export'
})
@View({
    template: `
    <div [style.background-color]="ref.value">
        <input #ref (keyup)="changeText(ref.value)">
    </div>
    `,
    directives: []
})
export class Export{
    textex: string;

    constructor(){
        this.textex = "exportiert";
    }

    changeText(value){
        this.textex = value;
    }
}

bootstrap(Export);