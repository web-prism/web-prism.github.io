import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserManagementPageActions } from 'src/app/+state/actions';
import { selectUsers } from 'src/app/+state/selectors/users-management.selectors';
import { User } from 'src/app/types/models/user';

@Component({
  selector: 'wp-user-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-management.component.html',
  styleUrl: './users-management.component.scss',
})
export class UsersManagementComponent implements OnInit {
  getUsers$ = new Observable<User[]>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(UserManagementPageActions.getUsers());

    this.getUsers$ = this.store.select(selectUsers);
  }
}
