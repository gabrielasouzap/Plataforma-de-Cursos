const applyFiltersButton = document.getElementById('apply-filters');

applyFiltersButton.addEventListener('click', () => {
  const category = document.getElementById('category').value;
  const durationOrder = document.getElementById('duration').value;

  // Simulando a obtenção de cursos filtrados
  const filteredCourses = filterAndSortCourses(category, durationOrder);

  displayCourses(filteredCourses);
});

function filterAndSortCourses(category, durationOrder) {
  const courses = [
    { name: 'Curso de Programação', category: 'programacao', duration: 20 },
    { name: 'Curso de Design', category: 'design', duration: 15 },
    { name: 'Curso de Marketing', category: 'marketing', duration: 30 },
    // Adicione outros cursos aqui
  ];

  const filteredCourses = courses.filter(course => {
    return course.category === category || category === '';
  });

  filteredCourses.sort((a, b) => {
    if (durationOrder === 'asc') {
      return a.duration - b.duration;
    } else {
      return b.duration - a.duration;
    }
  });

  return filteredCourses;
}

function displayCourses(courses) {
  const courseListContainer = document.querySelector('.course-list');
  courseListContainer.innerHTML = '';

  courses.forEach(course => {
    const courseElement = document.createElement('div');
    courseElement.classList.add('course-item');
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
    document.getElementById("sidebar").style.marginRight= "0";
  }
  