import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Article} from './article';

@Component({
	selector: 'articles',
	template: ``
})
export class AppComponent{

}
var ARTICLES: Article[] = [
new Article('Semantic UI', 'http://semantic-ui.com/images/logo.png', 'Semantic empowers designers and developers by creating a shared vocabulary for UI.', 'http://semantic-ui.com/images/logo.png', 0),
new Article('Angular 2', 'http://semantic-ui.com/images/logo.png', 'Headers may be oriented to give the hierarchy of a section in the context of the page.', 'resources/images/ang.png', 0),
new Article('Angular 2', 'http://semantic-ui.com/images/logo.png', 'Headers may be oriented to give the hierarchy of a section in the context of the page.', 'resources/images/ang.png', 0),
];

