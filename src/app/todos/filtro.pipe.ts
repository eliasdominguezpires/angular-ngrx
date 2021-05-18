import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filtro/filtro.action';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Todo[], filtro: filtrosValidos): Todo[] {

    switch (filtro) {
      case 'completados':
        return value.filter(todo => todo.completado)

      case 'pendientes':
        return value.filter(todo => !todo.completado)

      default:
        return value;
    }
  }

}
