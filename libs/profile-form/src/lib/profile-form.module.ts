import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Route, RouterModule } from '@angular/router';
import { AddVocabularyFormComponent } from './profile-form/add-vocabulary-form/add-vocabulary-form.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { AddResourceFormComponent } from './profile-form/add-resource-form/add-resource-form.component';

export const profileFormRoutes: Route[] = [
    { path: '', pathMatch: 'full', component: ProfileFormComponent }
];

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        RouterModule.forChild(profileFormRoutes)
    ],
    declarations: [
        ProfileFormComponent,
        AddVocabularyFormComponent,
        AddResourceFormComponent
    ]
})
export class ProfileFormModule { }
