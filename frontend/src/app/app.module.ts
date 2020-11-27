import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroTarefaComponent } from './components/cadastro-tarefa/cadastro-tarefa.component';
import { EditarTarefaComponent } from './components/editar-tarefa/editar-tarefa.component';
import { ListaTarefaComponent } from './components/lista-tarefa/lista-tarefa.component';


registerLocaleData(localePt);

const routes: Routes =
  [
    {
      path: 'tarefas/cadastrar',
      component: CadastroTarefaComponent,
    },
    {
      path: 'tarefas',
      component: ListaTarefaComponent,
    },
    {
      path: 'tarefas/:id',
      component: EditarTarefaComponent,
    },
    { path: '**', component: PageNotFoundComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageNotFoundComponent,
    CadastroTarefaComponent,
    EditarTarefaComponent,
    ListaTarefaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: LOCALE_ID,
      useValue: 'pt-BR'}],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
