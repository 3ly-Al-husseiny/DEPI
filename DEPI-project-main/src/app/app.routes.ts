import { RouterModule, Routes } from '@angular/router';

import { RegisterPage } from './features/components/register-page/register-page';
import { RegisterPage2 } from './features/components/register-page2/register-page2';
import { RegisterPage3 } from './features/components/register-page3/register-page3';
import { RegisterPage4 } from './features/components/register-page4/register-page4';
import { LoginPage } from './features/components/login-page/login-page';

import { PageNotfound } from './page-notfound/page-notfound';
import { Profile } from './profile/profile';

export const routes: Routes = [
    {path:'',component:LoginPage},
    {path:"register1",component:RegisterPage},
    {path:"register2",component:RegisterPage2},
    {path:"register3",component:RegisterPage3},
    {path:"register4",component:RegisterPage4},
    {path:"profile",component:Profile},
    {path:"login",component:LoginPage},
    {path:"**",component:PageNotfound},
    
];
