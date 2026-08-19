
const produtos = [
    {
      id: 1,
      nome: "Notebook",
      preco: 3500.00,
      categoria: "Eletrônicos",
      emEstoque: true
    },
    {
      id: 2,
      nome: "Cadeira de Escritório",
      preco: 850.00,
      categoria: "Móveis",
      emEstoque: true
    },
    {
      id: 3,
      nome: "Smartphone",
      preco: 2200.00,
      categoria: "Eletrônicos",
      emEstoque: false
    },
    {
      id: 4,
      nome: "Mochila",
      preco: 180.00,
      categoria: "Acessórios",
      emEstoque: true
    },
    {
      id: 5,
      nome: "Fone de Ouvido",
      preco: 320.00,
      categoria: "Eletrônicos",
      emEstoque: true
    }
  ];


//acessa os valores do array
for(prod of produtos){
    let message = `${prod.id} - ${prod.nome}
    Categoria: ${prod.categoria}
    Preço: R$${prod.preco}
    Em estoque: ${prod.emEstoque?'sim':'nao'}`
    console.log(message)
}

//acessa os indices(ids) do array
for(prod in produtos){
    console.log(prod)
}
 /*   
//forEach 
function showProducts(prod){
    console.log(prod)
}
produtos.forEach(showProducts)
*/
