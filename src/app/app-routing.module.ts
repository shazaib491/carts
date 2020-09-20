import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildProductComponent } from './child-product/child-product.component';
import { ProductComponent } from './product/product.component';
import { AddItemComponent } from './add-item/add-item.component';
import { NgTempComponent } from './ng-temp/ng-temp.component';
import { AddStoreComponent } from './add-store/add-store.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
const routes: Routes = [
  {path:"ngTemp",component:NgTempComponent},
  {path:"product",component:ProductComponent},
  {path:"child",component:ChildProductComponent},
  {path:"addItem",component:AddItemComponent},
  {path:"addStore",component:AddStoreComponent},
  {path:"",component:ParentComponent},
  {path:"child",component:ChildComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
