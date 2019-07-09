import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    return [
      { name: 'Felipe Assis', email: 'felipesntsassis@gmail.com', text: 'Carry On aways! Everywere!' },
      { name: 'Suellen Assis', email: 'fesuassis@gmail.com', text: 'Melhor esposa' },
      { name: 'Isabelle Assis', email: 'isa.assis@gmail.com', text: 'Melhor filha' },
      { name: 'Machado de Assis', email: 'machado.assis@gmail.com', text: 'Maior escritor brasileiro' },
      { name: 'Castro Alves', email: 'alvescastro@terra.com.br', text: 'Escritor Brasileiro' },
      { name: 'Antero de Quental', email: 'antero@aol.pt', text: 'Poeta Português' }
    ];
  }

}
