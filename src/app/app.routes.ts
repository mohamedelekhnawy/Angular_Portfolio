import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { NotFound } from './not-found/not-found';
import { ContactMe } from './contact-me/contact-me';

export const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    {path:'Home',component:Home},
    {path:'About',component:About},
    {path:'Projects',component:Projects},
    {path:'Contact',component:ContactMe},
    {path:'**',component:NotFound}
];
