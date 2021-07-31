'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')


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


const saveClient = () => {
    if (isValidFields()){
        console.log('Cadastrando cliente')

    }
}


//Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)