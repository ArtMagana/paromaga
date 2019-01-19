const restBooksApi = axios.create({
  baseUrl: 'http://localhost:3000/buscar'
});

function buscaLibro(strLibro) {
  restBooksApi.post(strLibro)
  .then(res => {
    console.log(res);
  })
  .catch(err => console.log(err));
}

document.getElementById("titulo").onkeydown = () => {
  const libro = document.getElementById('titulo').value;
  buscaLibro(libro);
}