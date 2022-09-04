//Chamando uma api usando fetch e utilizando com encadeamento. usando arrow

fetch('https://api.github.com/users/maykbrito')
.then( response => response.json())
.then( data => fetch(data.respos_url))
.then( res => res.json())
.then (d => console.log(d))
.catch( err => console.log(err))
