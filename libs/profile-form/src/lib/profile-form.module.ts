import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProfileFormComponent } from './profile-form/profile-form.component';

export const profileFormRoutes: Route[] = [
    { path: '', pathMatch: 'full', component: ProfileFormComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(profileFormRoutes)
    ],
    declarations: [
        ProfileFormComponent
    ]
})
export class ProfileFormModule { }
