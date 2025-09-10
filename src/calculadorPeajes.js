export function peaje(entrada, salida){
    return (salida-entrada)/(1000*60*60)*10 ;
}

export function estaPerdido(entrada,salida,perdido){
    
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