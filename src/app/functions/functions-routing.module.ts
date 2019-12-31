import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '../shell/shell.service';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from '../core/authentication/auth.guard';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/functions', pathMatch: 'full' },
    { path: 'functions', component: IndexComponent }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FunctionsRoutingModule { }