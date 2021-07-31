'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {document.getElementById('modal')
    .classList.remove('active')
    clearFields()
}

const tempCliente = {
    nome: "Jorge",
    email: 'jorgin@yahoo.com.br',
    celular: '34536221',
    cidade: 'colegio'

}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (db_client) => localStorage.setItem('db_client', JSON.stringify(db_client))

// Início do CRUD 

// Create

const createCliente = (client) => {
    const db_client = getLocalStorage()
    db_client.push (client)
    setLocalStorage(db_client)

}

// Read

const readCliente = () => getLocalStorage()

// Update

const updateCliente = (index, client) => {
    const db_cliente = readCliente()
    db_cliente[index] = client
    setLocalStorage(db_cliente)

}

// Delete

const deleteCliente = (index) => {
    db_cliente = readCliente()
    db_client.slice(index,1)
    setLocalStorage(db_client)
}



// Interação cm o layout


const isValidFields = () => {
    return document.getElementById('form').reportValidity()

}

const clearFields = () =>{
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = '');

}


const saveClient = () => {
    if (isValidFields()){
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        }
        createCliente(client)
        closeModal()

    }
}

const createRow = (client, index) =>{
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.celular}</td>
        <td>${client.cidade}</td>
        <td>
            <button type="button" class="button green">EDITAR</button>
            <button type="button" class="button red">EXCLUIR</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable = () =>{
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () =>{
    const db_client = readCliente()
    clearTable()
    db_client.forEach(createRow)
}


updateTable()

//Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)