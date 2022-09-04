// pequena introdução do axion pode ser  usado em web ou no node
//Promessas 

import axios from "axios";

axios.get('https://api.github.com/users/maykbrito')
  .then(res => {
    console.log(res.data);
  });


