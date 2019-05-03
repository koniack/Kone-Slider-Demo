import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import "bulma/css/bulma.css";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "slider",
        component: AppComponent,
        data: { state: "slider" }
      },
      {
        path: "products",
        data: { preload: true, state: "products" },
        component: AppComponent
      },
      {
        path: "store",
        data: { state: "store" },
        component: AppComponent
      },
      {
        path: "blog",
        data: { state: "contact" },
        component: AppComponent
      },
      { path: "", pathMatch: "full", redirectTo: "slider" },
      { path: "**", pathMatch: "full", redirectTo: "slider" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
