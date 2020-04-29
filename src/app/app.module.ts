import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';
import json from 'highlight.js/lib/languages/json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { FormsModule }   from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CabinetComponent } from './pages/dashcomponents/cabinet/cabinet.component';
import { CashinComponent } from './pages/dashcomponents/cashin/cashin.component';
import { CashoutComponent } from './pages/dashcomponents/cashout/cashout.component';
import { HistoryComponent } from './pages/dashcomponents/history/history.component';
import { RefsysComponent } from './pages/dashcomponents/refsys/refsys.component';
import { WalletsComponent } from './components/wallets/wallets.component';
import { PaschangeComponent } from './components/paschange/paschange.component';
import { DashNavComponent } from './components/dash-nav/dash-nav.component';
import { SettingsComponent } from './pages/dashcomponents/settings/settings.component';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule, NbTabsetModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbStepperModule } from '@nebular/theme';
import { NbInputModule } from '@nebular/theme'
import { BalanceComponent } from './components/balance/balance.component';

export function hljsLanguages() {
  return [{ name: 'json', func: json }];
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavBarComponent,
    FooterComponent,
    HeroComponent,
    HomeContentComponent,
    LoadingComponent,
    DashboardComponent,
    CabinetComponent,
    CashinComponent,
    CashoutComponent,
    HistoryComponent,
    RefsysComponent,
    WalletsComponent,
    PaschangeComponent,
    DashNavComponent,
    SettingsComponent,
    BalanceComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    NbStepperModule,
    NbTabsetModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NbCardModule,
    NgbModule,
    NbButtonModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    ButtonsModule.forRoot(),
    FontAwesomeModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
