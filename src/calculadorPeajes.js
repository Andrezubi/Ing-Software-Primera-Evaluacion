export function peaje(entrada, salida){
    var total = 0;
    var actual = new Date(entrada);

    while (actual < salida) {
        const hora = actual.getHours();
        if (hora >= 22 || hora <= 5) {
            total += 6; // nocturna
        } else {
            total += 10; // regular
        }
    
    actual.setHours(actual.getHours() + 1);
  }

  return total;
    

    
}

export function validador(entrada,salida,perdido){
    
    if(salida<entrada){
        return "La fecha de Entrada no puede ser despues de la de Salida";
    }
    
    
    if(perdido){
        return 80;
    }
    else{
        return peaje(entrada,salida);
    }
}