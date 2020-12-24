import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'src/app/services/authentication.guard';
import { MoviesListDetailsComponent } from './moviesList-details/moviesList-details.component';
import { MoviesListTeamComponent } from './moviesList/moviesList.component';


const routes: Routes = [
         { path: '', 
         component: MoviesListTeamComponent ,
         canActivate : [AuthenticationGuard]
          },
         { path: "moviesList-details/:id",
              children : [
                { path : "", component : MoviesListDetailsComponent }
            ]
        }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesListRoutingModule { }
