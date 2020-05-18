import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TestPageComponent } from './pages/test-page/test-page.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: TestPageComponent},
  {path: 'features', component: TestPageComponent},
  {path: 'signin', component: TestPageComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
