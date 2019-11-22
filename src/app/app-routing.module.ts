import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: UsersListComponent },
  { path: 'add', component: UserAddEditComponent },
  { path: 'edit/:id', component: UserEditComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
