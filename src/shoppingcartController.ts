/// <reference path="./angular2/angular2.d.ts"/>
/* tslint:disable */
import {Component, View, bootstrap, For, If} from 'angular2/angular2';
import {ArticleResource} from './articleResource';
import {Article} from 'article';

@Component({
    selector: 'cart',
    properties: {
        cart: 'cart'
    }
})
@View({
    templateUrl: "html_templates/shoppingcart_template.html",
    directives: [For]
})
/* tslint:enable */
export class ShoppingcartController {

    cart: Array <Article>;
    articleMock: ArticleResource;

    constructor() {
        this.articleMock = new ArticleResource();
        this.cart = [];
    }

    calculateTotal(): number {
        var val = 0;
        this.cart.forEach(function(article){
           val += article.price;
        });
        return Math.round(val*100)/100;
    }

    addToCart(id: number): void {
        var article = this.articleMock.findArticleById(id);

        if(article){
            this.cart.push(article);
        }
    }

    // TODO Arrowfunctions
    deleteFromCart(delid: number): void {
        var index = 0;
        var gefunden = false;
        this.cart.forEach(article => {
            if (article.id === delid) {
                gefunden = true;
            }
            else if(!gefunden) {
                index++;
            }
        });
        this.cart.splice(index, 1);
    }

    // TODO Sinnvolle Implementierung und Fix finden warum for ... of nicht richtig geht nur mit +100
    emptyCart(): void {
        alert("Bestellung im Wert von " + this.calculateTotal() + "\u20AC erfolgreich! \n" +
        this.toString());
        for(var i = 0; i <this.cart.length + 100; i++) {
            for(var art of this.cart) {
                this.deleteFromCart(art.id);
            }
        }
    }

    toString(): string {
        var s = "";
        this.cart.forEach(function(article){
            s += article.id + " " + article.name + " " + article.price + "\u20AC \n";
        });
        return s;
    }

    doneTyping($event): void {
        if ($event.which === 13){
            this.addToCart($event.target.value);
            $event.target.value = null;
        }
    }

}

bootstrap(ShoppingcartController);
