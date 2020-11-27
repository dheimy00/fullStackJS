import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../../services/rest-api.service';
@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  tarefa : any = [] ;
  message: string;

  constructor(
    private router: Router,
    private actRotue: ActivatedRoute,
    private restApiService: RestApiService) { }

  ngOnInit(){
    this.getTarefa(this.actRotue.snapshot.paramMap.get('id'));
  }

  getTarefa(id) {
    this.restApiService.getTarefa(id)
      .subscribe(
        tarefa => {
          this.tarefa = tarefa;
          console.log(tarefa);
        },
        error => {
          console.log(error);
        });
  }

  atualizarTarefa() {
    this.restApiService.atualizarTarefa(this.tarefa)
    .subscribe(    tarefa => {
      console.log(tarefa);
      this.router.navigate(['/tarefas']);
    });
  }
}
