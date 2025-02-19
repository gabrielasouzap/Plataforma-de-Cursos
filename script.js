const applyFiltersButton = document.getElementById("apply-filters");

applyFiltersButton.addEventListener("click", () => {
  const category = document.getElementById("category").value;
  const durationOrder = document.getElementById("duration").value;

  // Simulando a obtenção de cursos filtrados
  const filteredCourses = filterAndSortCourses(category, durationOrder);

  displayCourses(filteredCourses);
});

function filterAndSortCourses(category, durationOrder) {
  const courses = [
    { name: "Curso de Programação", category: "programacao", duration: 20 },
    { name: "Curso de Design", category: "design", duration: 15 },
    { name: "Curso de Marketing", category: "marketing", duration: 30 },
    // Adicione outros cursos aqui
  ];

  const filteredCourses = courses.filter((course) => {
    return course.category === category || category === "";
  });

  filteredCourses.sort((a, b) => {
    if (durationOrder === "asc") {
      return a.duration - b.duration;
    } else {
      return b.duration - a.duration;
    }
  });

  return filteredCourses;
}

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

// Carrossel

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

function searchCourse(sentence) {
  fetch(`http://localhost:3000/search/${sentence}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro de resposta HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      handlerSearch(data)
      console.log("Dados recebidos do servidor:", data);
    })
    .catch((err) => {
      console.error("Erro na requisição:", err);
    });
}

function handlerSearch(data) {
  const card = createCards(data);

  document.querySelector(".course-prog").innerHTML = card

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
    searchCourse(inputSearchDom.value);
  }
});
