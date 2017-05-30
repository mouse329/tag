import { Tag } from './tag';
import { Component, OnInit } from '@angular/core';
import { TagService } from './tag.service';


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
  ngOnInit() { this.heroes=[]; }


  addHero(uid: number) {
    if (!uid) { return; }
    this.heroService.create(uid)
                     .subscribe(
                       hero  => this.heroes.push(hero),
                       error => this.errorMessage = <any>error);
  }
}
