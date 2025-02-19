const idCurso = Number(window.location.search.split("id=")[1])

function getInfos(){
  const infosCurso = requestInfo("GET", idCurso)
  console.log(infosCurso)
  document.querySelector(".loading").style.display = "none"
}

getInfos()

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
        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Resposta do servidor:", data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }
}
