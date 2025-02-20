const idCurso = Number(window.location.search.split("id=")[1])

function changePage(dados){
  document.querySelector('h1').innerHTML = dados.name
  modulos_formatados = createLis(dados.modules)
  console.log(modulos_formatados)
  document.querySelector('.lista-modulos').innerHTML = modulos_formatados
  document.querySelector('.duracao').innerHTML = dados.duration + " horas";
  document.querySelector('.descript').innerHTML = dados.description
  document.querySelector('.course-image').src = dados.image;
  
}

requestInfo("GET", idCurso)

function requestInfo(type, param) {
  if (type === "GET") {
    fetch(`http://localhost:3000/courses/${param}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro de resposta HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        changePage(data[0])
        console.log("Dados recebidos do servidor:", data);
      })
      .catch((err) => {
        console.error("Erro na requisição:", err);
      });
  }

  if (type === "POST") {
    fetch("http://localhost:3000/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param) 
    })
      .then((response) => {
        console.log(response)
      })
      .then((data) => {
        console.log("Resposta do servidor:", data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }
}

function createLis(modules){
  const arr = new Array();

  modules.forEach(e => {
    arr.push(`<li> ● ${e}</li>`)
  })

  return arr.join('')
}