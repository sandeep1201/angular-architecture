import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { VillainsComponent } from "./villains/villains.component";
import { VillainDetailContainerComponent } from "./villain-detail-container/villain-detail-container.component";

const routes: Routes = [
  // TODO: Step 3
  // Refactor the path to have child routes
  // Remove the pathMatch : full
  // Add the children array to go to VillainDetailContainerComponent
  // when the route path is details/:id

  // TODO: Step 3 - Solution
  {
    path: "",
    component: VillainsComponent,
    children: [
      { path: "details/:id", component: VillainDetailContainerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillainsRoutingModule {}
