'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')


const tempCliente = {
    nome: "Clebinho",
    email: 'clebinho@yahoo.com.br',
    celular: '40028922',
    cidade: 'capela'

}

// Início do CRUD - Create

const createCliente = (cliente) => {
    const db_clients = JSON.parse(localStorage.getItem('db_clients'))
    db_clients.push (cliente)
    localStorage.setItem('db_cliente', JSON.stringify(db_clients))

}






document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)