var totalVenda = 0;
var vendaItens = [
    {codigo: 1, preco: 2.2, qtde: 2},
    {codigo: 2, preco: 7.99, qtde: 5},
    {codigo: 3, preco: 12, qtde: 3}
];

vendaItens.forEach(
    function(item, index, array){
    var subtotal = item.qtde * item.preco; 
    totalVenda += subtotal;
    item.subtotal = subtotal;
});

console.log('total: R$',totalVenda);
console.log('itens subtotal:', vendaItens);