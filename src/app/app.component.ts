import { TagService } from './tag.service';
import { Tag } from './tag';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TagService ],
})
export class AppComponent implements OnInit{
  errorMessage: string;
  heroes: Tag[];
  mode = 'Observable';
  constructor (private heroService: TagService) {}
  ngOnInit() { this.getHeroes(); }
  getHeroes() {
    this.heroService.getHeroes()
                     .subscribe(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);
  }
  addHero(uid: number) {
    if (!uid) { return; }
    this.heroService.create(uid)
                     .subscribe(
                       hero  => this.heroes.push(hero),
                       error =>  this.errorMessage = <any>error);
  }
}
