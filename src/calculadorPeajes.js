export function peaje(entrada, salida){
    var entradaDate =new Date(entrada);
    var salidaDate = new Date(salida);
    if(entradaDate.getHours()>=22){
        return ((salida-entrada)/(1000*60*60)*6)
    }
    

    return (salida-entrada)/(1000*60*60)*10 ;
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