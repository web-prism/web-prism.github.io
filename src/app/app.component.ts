import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsLoaderShown } from './+state/selectors/misc.selectors';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, AngularMaterialModule],
  selector: 'wp-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isLoaderShown$ = new Observable<boolean>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoaderShown$ = this.store.select(selectIsLoaderShown);
  }
}
