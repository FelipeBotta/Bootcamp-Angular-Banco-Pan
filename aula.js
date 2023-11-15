

function acrescimoJuros(valor, percentualJuros){
    const valorAcrescimo = (percentualJuros/100) * valor ;
    return valor + valorAcrescimo;
}


console.log(acrescimoJuros(100,20));