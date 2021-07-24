// Página Clientes

// Salvar dados no localStorage
const form = document.getElementById('formulario')

form.addEventListener('submit', e => {
  e.preventDefault()

  let nomeCliente = document.getElementById('nome').value
  let emailCliente = document.getElementById('email').value
  let telefoneCliente = document.getElementById('telefone').value
  let cpfCliente = document.getElementById('cpf').value
  let enderecoCliente = document.getElementById('ender').value
  let numeroCliente = document.getElementById('numero').value
  let complementoCliente = document.getElementById('complemento').value
  let bairroCliente = document.getElementById('bairro').value
  let cepCliente = document.getElementById('cep').value
  let cidadeCliente = document.getElementById('cidade').value
  let UFCliente = document.getElementById('UF').value

  let data = {
    nomeCliente,
    emailCliente,
    telefoneCliente,
    cpfCliente,
    enderecoCliente,
    numeroCliente,
    complementoCliente,
    bairroCliente,
    cepCliente,
    cidadeCliente,
    UFCliente
  }

  let convertData = JSON.stringify(data)

  localStorage.setItem('lead', convertData)
})
