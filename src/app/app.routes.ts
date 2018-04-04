import { RouterModule, Routes } from "@angular/router";
import { ExperienceComponent } from "./experience/experience.component";
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from "./skills/skills.component";
import { AwardsComponent } from "./awards/awards.component";
import { EducationComponent } from "./education/education.component";
import { ContactComponent } from "./contact/contact.component";

const MY_ROUTES: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'awards', component: AwardsComponent },
    { path: 'education', component: EducationComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: '**', redirectTo: '/' }
];

export const appRoutes = RouterModule.forRoot(MY_ROUTES);