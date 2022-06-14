import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDetailResolver } from 'src/app/service/home-detail-resolver.service';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    resolve: {
      data: HomeDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
