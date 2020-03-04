import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './components/board/board.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'board',
    pathMatch: 'full',
  },
  {
    path: 'board',
    pathMatch: 'full',
    component: BoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
