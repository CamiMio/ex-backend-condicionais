
const  valorDoProduto = 100;
const  numeroParcelas = 6;

if (numeroParcelas === 1) {
    // a vista - COM 10% DE DESCONTO
    const desconto = valorDoProduto * 10 / 100;
    const valorAPagar = valorDoProduto - desconto;
    console.log( `Você deve pagar ${valorAPagar} pois à vista tem 10 % de desconto`);
    
}else {
    // parcelado sem juros
    const valorParcela = (valorDoProduto / numeroParcelas).toFixed(2);
    console.log (`Você deve pagar ${numeroParcelas} parcelas sem juros de R$ ${ valorParcela}`);

}



