import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
          { path: '', component: HomeComponent },
          { path: 'contact', component: SidebarComponent }
        ]), ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}