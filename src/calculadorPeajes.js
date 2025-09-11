export function peajeDiario(entrada, salida){
    var total = 0;
    var actual = new Date(entrada);

    while (actual < salida) {
        const hora = actual.getHours();
        let nextHour = new Date(actual);
        nextHour.setHours(actual.getHours() + 1, 0, 0, 0);

        // calcular fracción si la hora se pasa de salida
        const end = nextHour > salida ? salida : nextHour;
        const diffHours = (end - actual) / (1000 * 60 * 60);

        if (hora >= 22 || hora < 6) total += diffHours * 6;
        else total += diffHours * 10;

        actual = nextHour;
    }
    if(total>50){
        return 50;
    }
    else{
        return Math.ceil(total*100)/100;
    }

    
}

export function validador(entrada,salida,perdido){
    
    if(salida<entrada){
        return "La fecha de Entrada no puede ser despues de la de Salida";
    }
    
    
    if(perdido){
        return 80;
    }
    else{
        return peajeTotal(entrada,salida);
    }
}



export function peajeTotal(entrada,salida){
    const dateEntrada = new Date(entrada);
    const dateSalida = new Date(salida);
    var total=0;
    if(dateEntrada.getFullYear() === dateSalida.getFullYear() &&
         dateEntrada.getMonth() === dateSalida.getMonth() &&
         dateEntrada.getDate() === dateSalida.getDate()){
        return peajeDiario(dateEntrada,dateSalida);
    }
    const finPrimerDia = new Date(dateEntrada);
    finPrimerDia.setHours(23, 59, 59, 999);
    total += peajeDiario(dateEntrada, finPrimerDia);

    // Días intermedios
    let diaActual = new Date(finPrimerDia);
    diaActual.setDate(diaActual.getDate() + 1);
    diaActual.setHours(0, 0, 0, 0);


    const inicioSalida = new Date(dateSalida);
    inicioSalida.setHours(0, 0, 0, 0)
    while (diaActual < inicioSalida) {
        const finDia = new Date(diaActual);
        finDia.setHours(23, 59, 59, 999);

        // Peaje del día completo
        total += peajeDiario(diaActual, finDia);

        // Avanzar un día y resetear hora a medianoche
        diaActual.setDate(diaActual.getDate() + 1);
        diaActual.setHours(0, 0, 0, 0);
    }

    // Último día parcial
    const inicioUltimoDia = new Date(dateSalida);
    inicioUltimoDia.setHours(0, 0, 0, 0);
    total += peajeDiario(inicioUltimoDia, dateSalida);
    return Math.ceil(total*100)/100;
}


export function desglosador(entrada,salida,perdido){
    if(perdido){
        return "";
    }
    if(entrada>salida){
        return "<p>Error"
    }
    const dateEntrada = new Date(entrada);
    const dateSalida = new Date(salida);
    var total="";
    if(dateEntrada.getFullYear() === dateSalida.getFullYear() &&
         dateEntrada.getMonth() === dateSalida.getMonth() &&
         dateEntrada.getDate() === dateSalida.getDate()){
        return "<p>"+dateEntrada.toLocaleString().split(',')[0]+": "+peajeDiario(dateEntrada,dateSalida)+"bs.";
    }
    const finPrimerDia = new Date(dateEntrada);
    finPrimerDia.setHours(23, 59, 59, 999);
    total = "<p>"+dateEntrada.toLocaleString().split(',')[0]+": "+peajeDiario(dateEntrada, finPrimerDia)+"bs.";

    // Días intermedios
    let diaActual = new Date(finPrimerDia);
    diaActual.setDate(diaActual.getDate() + 1);
    diaActual.setHours(0, 0, 0, 0);


    const inicioSalida = new Date(dateSalida);
    inicioSalida.setHours(0, 0, 0, 0)
    while (diaActual < inicioSalida) {
        const finDia = new Date(diaActual);
        finDia.setHours(23, 59, 59, 999);

        // Peaje del día completo
        total = total+"<p>"+diaActual.toLocaleString().split(',')[0]+": " +peajeDiario(diaActual, finDia)+"bs.";

        // Avanzar un día y resetear hora a medianoche
        diaActual.setDate(diaActual.getDate() + 1);
        diaActual.setHours(0, 0, 0, 0);
    }

    // Último día parcial
    const inicioUltimoDia = new Date(dateSalida);
    inicioUltimoDia.setHours(0, 0, 0, 0);
    total =total + "<p>"+dateSalida.toLocaleString().split(',')[0]+": " +peajeDiario(inicioUltimoDia, dateSalida)+"bs.";
    return total;
}


