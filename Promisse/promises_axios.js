// Tem que instalar o pacote axios

import axios from 'axios'

//Usando o ARROW do javascripit

axios
    .get('https://api.github.com/users/xXRicardoX')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .cath( error => console.log(error))
