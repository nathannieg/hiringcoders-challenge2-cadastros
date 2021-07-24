// Página Produtos

// Salvar dados no localStorage
const form = document.getElementById('formulario')

form.addEventListener('submit', e => {
  e.preventDefault()

  let nomeProduto = document.getElementById('idNomeProduto').value
  let codigoProduto = document.getElementById('idCodProduto').value
  let quantidadeProduto = document.getElementById('idQtde').value

  let data = {
    nomeProduto,
    codigoProduto,
    quantidadeProduto
  }

  let convertData = JSON.stringify(data)

  localStorage.setItem('lead', convertData)
})
