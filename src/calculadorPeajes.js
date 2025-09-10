export function peaje(entrada, salida){
    return (salida-entrada)/(1000*60*60)*10 ;
}

export function estaPerdido(entrada,salida,perdido){
    if(perdido){
        return 80;
    }
    else{
        return peaje(entrada,salida);
    }
}