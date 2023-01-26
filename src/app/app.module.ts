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
    TitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [Ts2htmlComponent]
})
export class AppModule { }
