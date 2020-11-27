export class Tarefa {

    id : number
    descricao : string
    concluido: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
