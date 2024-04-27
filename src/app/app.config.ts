import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter, withViewTransitions } from "@angular/router";
import { routes } from "./routes";
import { BrowserModule } from "@angular/platform-browser";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { provideAnimations } from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(BrowserModule, MatProgressBarModule),
        provideRouter(routes, withViewTransitions()),
        provideAnimations()]
};
