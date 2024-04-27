import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { SectionComponent } from './components/section/section.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WorkingExpComponent } from './components/working-exp/working-exp.component';
import { FormationComponent } from './components/formation/formation.component';
import { ToolsComponent } from './components/tools/tools.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
AppComponent,
    SidebarComponent,
    ContentComponent,
    SectionComponent,
    AboutMeComponent,
    WorkingExpComponent,
    FormationComponent,
    ToolsComponent,
    SkillsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
