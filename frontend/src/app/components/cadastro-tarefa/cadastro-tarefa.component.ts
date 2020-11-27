import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../../services/rest-api.service';
import { FormsGroup } from '../formsControl/FormsControl';
import { Tarefa } from '../../models/tarefa';


@Component({
  selector: 'app-cadastro-tarefa',
  templateUrl: './cadastro-tarefa.component.html',
  styleUrls: ['./cadastro-tarefa.component.css']
})
export class CadastroTarefaComponent implements OnInit {

  form: FormsGroup = new FormsGroup();
  formSubmitted: boolean = false;
  showMessage: boolean = false;
  novaTarefa: Tarefa = new Tarefa();

  constructor(
    private router: Router,
    private restApiService: RestApiService
  ) { }

  ngOnInit(): void {

  }

  submitForm(form: any) {
    this.formSubmitted = true;
    if (form.valid) {
      this.restApiService.addTarefa(this.novaTarefa).
        subscribe(tarefa => {
          console.log(tarefa);
         this.showMessage = true;
        });
      this.novaTarefa = new Tarefa();
      form.reset();
      this.formSubmitted = false;
    }
  }


}
