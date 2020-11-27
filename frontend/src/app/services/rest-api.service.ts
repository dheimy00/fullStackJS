import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Tarefa } from '../models/tarefa';

// Headers
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  
  private apiUrl = 'http://localhost:8080/api/tarefas';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }


  getTarefas(): Observable<Tarefa[]> {
    return this.httpClient.get<Tarefa[]>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getTarefa(id): Observable<Tarefa> {
    return this.httpClient.get<Tarefa>(`${this.apiUrl}/${id}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  addTarefa(tarefa): Observable<Tarefa> {
    return this.httpClient.post<Tarefa>(this.apiUrl,tarefa, httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  atualizarTarefa(tarefa): Observable<any> {
    return this.httpClient.put(this.apiUrl,tarefa, httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  excluirTarefa(id): Observable<Tarefa> {
    return this.httpClient.delete<Tarefa>(`${this.apiUrl}/${id}`, httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

    alternarTarefaComplete(tarefa):Observable<any>{

    let updatedTarefa = {
      id:tarefa.id,
      concluido: !tarefa.concluido
    };
    console.log(updatedTarefa)
    return this.httpClient.put(this.apiUrl,updatedTarefa, httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  
}