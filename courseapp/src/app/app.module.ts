import { EmployeeService } from './services/employee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { CourselistingComponent } from './components/courselisting/courselisting.component';
import { MissionComponent } from './components/mission/mission.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateEmpInfoComponent } from './components/create-emp-info/create-emp-info.component';
import { GetEmpInfoComponent } from './components/get-emp-info/get-emp-info.component';
import { UpdateEmpInfoComponent } from './components/update-emp-info/update-emp-info.component';
import { DeleteEmpInfoComponent } from './components/delete-emp-info/delete-emp-info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    CourselistingComponent,
    MissionComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    CreateEmpInfoComponent,
    GetEmpInfoComponent,
    UpdateEmpInfoComponent,
    DeleteEmpInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
