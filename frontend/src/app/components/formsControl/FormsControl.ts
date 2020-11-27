import { FormControl, FormGroup, Validators } from '@angular/forms';

export class FormsControl extends FormControl {

    label: string;
    modelProperty: string;

    constructor(label:string,property:string,value: any,validator: any) {
        super(value, validator);
        this.label = label;
        this.modelProperty = property;
    }

    getValidationMessages() {
        const mensagens: string [] = [];
        if (this.errors) {
            for (let errorNome in this.errors) {
                switch (errorNome) {
                    case 'required':
                        mensagens.push(`O campo ${this.label}  é obrigatório`);
                        break;
                    case 'minlength':
                        mensagens.push(`Um ${this.label} deve ser pelo menos ${this.errors['minlength'].requiredLength} caracteres`);
                        break;
                    case 'maxlength':
                        mensagens.push(`Um ${this.label} não deve ser mais do que ${this.errors['maxlength'].requiredLength} caracteres`);
                        break;
                    case 'pattern':
                        mensagens.push(`${this.label} contém caracteres ilegais`);
                        break;
                }
            }
        }
        return mensagens;
    }
}

export class FormsGroup extends FormGroup {

    constructor() {
      
        super({
            descricao: new FormsControl('descrição','descricao',' ',Validators.compose([Validators.required,Validators.pattern('^[A-Za-z ]+$')])),
        });
    }

}