import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
   declarations :[CardComponent], 
   exports:[CardComponent] // make all these available over application level
})
export class SharedModule{}
