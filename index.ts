
const dados = [
    { id: 1, nome: 'Nome 1', valor: 10, status: 'Inativo'},
    { id: 2, nome: 'Nome 2', valor: 20, status: 'Ativo'},
    { id: 3, nome: 'Nome 3', valor: 30, status: 'Inativo'},
    { id: 4, nome: 'Nome 4', valor: 40, status: 'Ativo'},
    { id: 5, nome: 'Nome 5', valor: 50, status: 'Inativo'},
  ];

function listName(){
    const names = dados.map(items => items.nome)
    return names
  }

  function filtro(){
    const teste = dados.filter(items => items.status === 'Ativo')
    return teste.map(item => item.nome)
  }
 console.log(listName())
 console.log("Filtro", filtro())