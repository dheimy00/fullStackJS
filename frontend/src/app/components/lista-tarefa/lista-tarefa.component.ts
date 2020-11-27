import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-lista-tarefa',
  templateUrl: './lista-tarefa.component.html',
  styleUrls: ['./lista-tarefa.component.css']
})
export class ListaTarefaComponent implements OnInit {
  tarefas: any = [];
  isLoadingResults = true;
  constructor( 
    private router: Router,
      private restApiService: RestApiService) { }

  ngOnInit(): void {
    this.getTarefas();
  }

  getTarefas(){
    return this.restApiService.getTarefas()
    .subscribe(tarefas =>{
      console.log(tarefas);
      this.tarefas = tarefas;
    })
  }

  excluirTarefa(id) {
    this.restApiService.excluirTarefa(id)
    .subscribe(tarefas =>{
      console.log(tarefas);
      this.getTarefas();
    });
  }

  alternarTarefaComplete(tarefa){
    this.restApiService.alternarTarefaComplete(tarefa)
    .subscribe(    tarefa => {
      console.log(tarefa);
      this.router.navigate(['/tarefas']);
    });

  }

}
