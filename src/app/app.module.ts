import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ts2htmlComponent } from './ts2html/ts2html.component';
import { FormsModule } from '@angular/forms';
import { Html2tsComponent } from './html2ts/html2ts.component';
import { VisitingcardComponent } from './visitingcard/visitingcard.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpcountComponent } from './empcount/empcount.component';
import { PipeComponent } from './pipe/pipe.component';
import { ReversePipe } from './reverse.pipe';
import { AgePipe } from './age.pipe';
import { TitlePipe } from './title.pipe';
import { HighlightDirective } from './highlight.directive';
import { RendererDirective } from './renderer.directive';
import { HostlistnerDirective } from './hostlistner.directive';
import { HostbindingDirective } from './hostbinding.directive';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { SimpleinputComponent } from './simpleinput/simpleinput.component';
import { CclogoDirective } from './cclogo.directive';
import { CovidComponent } from './covid/covid.component';
import { HttpClientModule} from  '@angular/common/http';
import { AcccreateComponent } from './acccreate/acccreate.component';
import { AcctstatusComponent } from './acctstatus/acctstatus.component';
import { ListAccountComponent } from './list-account/list-account.component';

@NgModule({
  declarations: [
  AppComponent,
    Ts2htmlComponent,
    Html2tsComponent,
    VisitingcardComponent,
    EmplistComponent,
    EmpcountComponent,
    PipeComponent,
    ReversePipe,
    AgePipe,
    TitlePipe,
    HighlightDirective,
    RendererDirective,
    HostlistnerDirective,
    HostbindingDirective,
    LifecyclehookComponent,
    SimpleinputComponent,
    CclogoDirective,
    CovidComponent,
    AcccreateComponent,
    AcctstatusComponent,
    ListAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [Ts2htmlComponent]
})
export class AppModule { }
