const applyFiltersButton = document.getElementById("apply-filters");

applyFiltersButton.addEventListener("click", async () => {
  const category = document.getElementById("category").value;
  const durationOrder = document.getElementById("duration").value;

  const data = {
    category: category,
    durationOrder: durationOrder
  }
  console.log(data)

  const response = await requestInfo("POST", data)
  console.log(response)
});


function displayCourses(courses) {
  const courseListContainer = document.querySelector(".course-list");
  courseListContainer.innerHTML = "";

  courses.forEach((course) => {
    const courseElement = document.createElement("div");
    courseElement.classList.add("course-item");
    courseElement.textContent = `${course.name} - ${course.duration} horas`;
    courseListContainer.appendChild(courseElement);
  });

  //   nav Sidebar
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("sidebar").style.marginRight = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("sidebar").style.marginRight = "0";
}

// Carrossel principal

var swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// carrossel de cursos

const courseContainers = [...document.querySelectorAll(".course-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

courseContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

const inputSearchDom = document.querySelector("#search");

function requestInfo(type, param) {
  if (type === "GET") {
    fetch(`http://localhost:3000/search/${param}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro de resposta HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        handlerSearch(data);
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
        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        return data 
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }
}

function handlerSearch(data) {
  const tamanho = data.length
  const arrCards = new Array()
  data.forEach(e => {
    arrCards.push(createCards(e))
  })
  console.log(arrCards)
  //const card = createCards(data);


  document.querySelector(".course-prog").innerHTML = arrCards.join("");
}

function createCards(infos) {
  const card = `
<div class="course-card">
<div class="course-img">
    <img src="./assets/carousel/image 4.svg" class="course-thumb" alt="">
    <button class="card-btn">SAIBA MAIS</button>
</div>
<div class="course-info">
    <h2 class="course-brand">${infos.name}</h2>
    <p class="course-short-descripition">${infos.description}</p>
    <span class="price">${infos.duration}</span>
</div>
</div>
`;

  return card;
}

inputSearchDom.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    const cardsInfo = requestInfo("GET", inputSearchDom.value);
    console.log(cardsInfo)
  }
});



// Filtros e pesquisa
const applyFiltersBtn = document.getElementById('apply-filters');
const searchInput = document.getElementById('search');
const durationSelect = document.getElementById('duration');
const categorySelect = document.getElementById('category');

// mensagemde curso não localizado
let noResultsMessage = document.querySelector('.no-results');
if (!noResultsMessage) {
  noResultsMessage = document.createElement('p');
  noResultsMessage.classList.add('no-results');
  noResultsMessage.textContent = "Nenhum curso encontrado.";
  const container = document.querySelector('.course-container');
  if (container) {
    container.parentNode.insertBefore(noResultsMessage, container.nextSibling);
  } else {
    document.body.appendChild(noResultsMessage);
  }
}

/* Retorna a duração numérica de um curso.*/
function getDuration(courseCard) {
  const courseInfo = courseCard.querySelector('.course-info');
  if (courseInfo) {
    const h4s = courseInfo.querySelectorAll('h4');
    if (h4s.length > 1) {
      const durationText = h4s[1].textContent; // ex: "40 horas"
      const duration = parseInt(durationText);
      return isNaN(duration) ? 0 : duration;
    }
  }
  return 0;
}

/**
 * Ativa o layout grid para os containers de cursos (dentro de cada seção).
 */
function activateGridView() {
  const containers = document.querySelectorAll('.course-prog .course-container');
  containers.forEach(container => {
    container.classList.add('grid-view');
  });
}
function resetGridView() {
  const containers = document.querySelectorAll('.course-prog .course-container');
  containers.forEach(container => {
    container.classList.remove('grid-view');
  });
}

/*Ordena os cards visíveis por duração (asc ou desc).*/
function sortVisibleCards(order = 'asc') {
  const containers = document.querySelectorAll('.course-prog .course-container');
  containers.forEach(container => {
    let cards = Array.from(container.querySelectorAll('.course-card'))
                     .filter(card => card.style.display !== 'none');
    cards.sort((a, b) => {
      const durationA = getDuration(a);
      const durationB = getDuration(b);
      return order === 'asc' ? durationA - durationB : durationB - durationA;
    });
    const header = container.parentNode.querySelector('.course-category');
    container.innerHTML = "";
    if (header) container.parentNode.insertBefore(header, container);
    cards.forEach(card => container.appendChild(card));
  });
}

/*Filtra os cards de acordo com a pesquisa.*/
function filterCoursesBySearch(query) {
  query = query.toLowerCase();
  
  // Garante que todas as seções fiquem visíveis durante a pesquisa
  document.querySelectorAll('.course-prog').forEach(section => {
    section.style.display = '';
  });
  
  const containers = document.querySelectorAll('.course-prog .course-container');
  let foundAny = false;
  
  containers.forEach(container => {
    const cards = container.querySelectorAll('.course-card');
    cards.forEach(card => {
      const title = card.querySelector('.course-brand')?.textContent.toLowerCase() || "";
      const description = card.querySelector('.course-short-descripition')?.textContent.toLowerCase() || "";
      if (title.includes(query) || description.includes(query)) {
        card.style.display = 'block';
        foundAny = true;
      } else {
        card.style.display = 'none';
      }
    });
    // Oculta o cabeçalho de categoria durante a pesquisa
    const header = container.parentNode.querySelector('.course-category');
    if (header) header.style.display = 'none';
  });
  
  noResultsMessage.style.display = foundAny ? 'none' : 'block';
}

/*Filtra os cards de acordo com o filtro de categoria e ordena por duração*/
function filterCourses() {
  activateGridView();
  // Oculta as setas dos carrosséis (principal e de cursos)
  hideAllArrows();
  
  const selectedCategory = categorySelect.value; // "all", "programacao", "design", "marketing"
  const selectedOrder = durationSelect.value; // "asc" ou "desc"
  
  const sections = document.querySelectorAll('.course-prog');
  let anySectionVisible = false;
  
  sections.forEach(section => {
    const sectionCategory = section.getAttribute('data-category');
    const container = section.querySelector('.course-container');
    if (selectedCategory === "all" || sectionCategory === selectedCategory) {
      section.style.display = '';
      anySectionVisible = true;
      if (selectedCategory !== "all") {
        let header = section.querySelector('.course-category');
        if (!header) {
          header = document.createElement('h2');
          header.className = 'course-category';
          section.insertBefore(header, section.firstChild);
        }
        header.textContent = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
        header.style.display = 'block';
      } else {
        let header = section.querySelector('.course-category');
        if (header) header.style.display = 'none';
      }
      // Mostra todos os cards dessa seção
      const cards = container.querySelectorAll('.course-card');
      cards.forEach(card => card.style.display = 'block');
    } else {
      section.style.display = 'none';
    }
  });
  
  sortVisibleCards(selectedOrder);
  noResultsMessage.style.display = anySectionVisible ? 'none' : 'block';
}

/*Oculta todas as setas*/
function hideAllArrows() {
  const mainArrows = document.querySelectorAll('.swiper-button-prev, .swiper-button-next');
  mainArrows.forEach(arrow => {
    arrow.style.display = 'none';
  });
  const courseArrows = document.querySelectorAll('.course-prog .pre-btn, .course-prog .nxt-btn');
  courseArrows.forEach(arrow => {
    arrow.style.display = 'none';
  });
}

/*Mostra todas as setas.*/
function showAllArrows() {
  const mainArrows = document.querySelectorAll('.swiper-button-prev, .swiper-button-next');
  mainArrows.forEach(arrow => {
    arrow.style.display = 'block';
  });
  const courseArrows = document.querySelectorAll('.course-prog .pre-btn, .course-prog .nxt-btn');
  courseArrows.forEach(arrow => {
    arrow.style.display = 'block';
  });
}

/* Reseta o layout para o estado original*/
function resetToDefaultLayout() {
  const mainSwiper = document.querySelector('.swiper');
  if (mainSwiper) mainSwiper.style.display = '';
  showAllArrows();
  const containers = document.querySelectorAll('.course-container');
  containers.forEach(container => {
    container.classList.remove('grid-view');
  });
  const courseNavBtns = document.querySelectorAll('.course-prog .pre-btn, .course-prog .nxt-btn');
  courseNavBtns.forEach(btn => {
    btn.style.display = 'block';
  });
  const allCards = document.querySelectorAll('.course-card');
  allCards.forEach(card => {
    card.style.display = 'block';
  });
  const allHeaders = document.querySelectorAll('.course-category');
  allHeaders.forEach(header => {
    header.style.display = '';
  });
  noResultsMessage.style.display = 'none';
}

/* Eventos */

// Ao clicar no botão "Aplicar Filtros"
applyFiltersBtn.addEventListener('click', () => {
  filterCourses();
  const query = searchInput.value.trim();
  if (query !== "") {
    filterCoursesBySearch(query);
  }
});

// Evento para filtrar enquanto o usuário digita na pesquisa
searchInput.addEventListener('keyup', () => {
  const query = searchInput.value.trim();
  if (query !== "") {
    hideAllArrows();
    filterCoursesBySearch(query);
  } else {
    resetToDefaultLayout();
  }
});

// Quando o select de duração é alterado, reaplica os filtros
durationSelect.addEventListener('change', () => {
  filterCourses();
});
