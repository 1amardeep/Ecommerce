import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeOneComponent } from 'src/app/components/themes/theme-one/theme-one.component';
import { ThemeThreeComponent } from 'src/app/components/themes/theme-three/theme-three.component';
import { ThemeTwoComponent } from 'src/app/components/themes/theme-two/theme-two.component';
import { AuthenticationGuard } from 'src/app/services/authentication.guard';
import { MoviesListDetailsComponent } from './moviesList-details/moviesList-details.component';
import { MoviesListTeamComponent } from './moviesList/moviesList.component';


const routes: Routes = [
  {
    path: '',
    component: MoviesListTeamComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "moviesList-details/:id",
    children: [
      { path: "", component: MoviesListDetailsComponent }
    ]
  },
  {
    path: "themeOne",
    children: [
      { path: "", component: ThemeOneComponent }
    ]
  },
  {
    path: "themeTwo",
    children: [
      { path: "", component: ThemeTwoComponent }
    ]
  },
  {
    path: "themeThree",
    children: [
      { path: "", component: ThemeThreeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesListRoutingModule { }
