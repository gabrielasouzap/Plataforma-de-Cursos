const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let courses = [
  // Programação
  { id: 1, name: "Introdução à Programação", description: "Aprenda os fundamentos da programação.", category: "Programação", duration: "40", image: "https://example.com/images/programacao.jpg" },

  { id: 2, name: "JavaScript do Zero ao Avançado", description: "Domine JavaScript e construa aplicações web dinâmicas.", category: "Programação", duration: 50, image: "https://example.com/images/javascript.jpg" },

  { id: 3, name: "Python para Iniciantes", description: "Aprenda Python do básico ao intermediário.", category: "Programação", duration: 35, image: "https://example.com/images/python.jpg" },

  { id: 10, name: "Desenvolvimento Web com React", description: "Aprenda a desenvolver aplicações web modernas com React.", category: "Programação", duration: 45, image: "https://example.com/images/react.jpg" },

  { id: 11, name: "Banco de Dados com MySQL", description: "Entenda a modelagem e manipulação de dados com MySQL.", category: "Programação", duration: 38, image: "https://example.com/images/mysql.jpg" },

  { id: 12, name: "Algoritmos e Estruturas de Dados", description: "Aprenda algoritmos essenciais e estruturas de dados fundamentais.", category: "Programação", duration: 42, image: "https://example.com/images/algoritmos.jpg" },
  


  // Design
  { id: 4, name: "Design Gráfico para Iniciantes", description: "Descubra os conceitos básicos do design gráfico.", category: "Design", duration: 25, image: "https://example.com/images/design.jpg" },

  { id: 5, name: "Adobe Photoshop Completo", description: "Aprenda a usar o Photoshop para criação e edição de imagens.", category: "Design", duration: 40, image: "https://example.com/images/photoshop.jpg" },

  { id: 6, name: "UX/UI Design para Web", description: "Aprenda os fundamentos do design de experiência do usuário.", category: "Design", duration: 30, image: "https://example.com/images/uxui.jpg" },

  { id: 13, name: "Ilustração Digital para Iniciantes", description: "Aprenda técnicas básicas para criar ilustrações digitais.", category: "Design", duration: 35, image: "https://example.com/images/ilustracao.jpg" },

  { id: 14, name: "Tipografia e Identidade Visual", description: "Entenda como a tipografia impacta no design e branding.", category: "Design", duration: 28, image: "https://example.com/images/tipografia.jpg" },

  { id: 15, name: "Figma para Designers", description: "Aprenda a criar protótipos e wireframes com Figma.", category: "Design", duration: 32, image: "https://example.com/images/figma.jpg" },
  
  // Marketing
  { id: 7, name: "Marketing Digital Avançado", description: "Estratégias avançadas em marketing digital.", category: "Marketing", duration: 30, image: "https://example.com/images/marketing.jpg" },

  { id: 8, name: "SEO e Estratégias de Conteúdo", description: "Aprenda SEO e como melhorar seu ranqueamento no Google.", category: "Marketing", duration: 20, image: "https://example.com/images/seo.jpg" },

  { id: 9, name: "Redes Sociais para Negócios", description: "Saiba como alavancar seu negócio usando redes sociais.", category: "Marketing", duration: 25, image: "https://example.com/images/socialmedia.jpg" },

  { id: 16, name: "Marketing e Automação", description: "Aprenda a criar campanhas eficazes de e-mail marketing.", category: "Marketing", duration: 27, image: "https://example.com/images/emailmarketing.jpg" },

  { id: 17, name: "Google Ads para Iniciantes", description: "Aprenda a criar campanhas no Google Ads para atrair clientes.", category: "Marketing", duration: 30, image: "https://example.com/images/googleads.jpg" },

  { id: 18, name: "Branding e Posicionamento de Marca", description: "Aprenda a criar uma identidade forte para sua marca.", category: "Marketing", duration: 34, image: "https://example.com/images/branding.jpg" }
];

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.get('/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  course ? res.json(course) : res.status(404).json({ error: "Curso não encontrado" });
});

app.get('/search/:sentence', (req, res) => {
  const stringSearch = req.params.sentence.toLowerCase();

  const searchJson = courses.filter(
    c => c.name.toLowerCase().includes(stringSearch) === true        
  );
  
  if (!searchJson) {
    return res.status(404).json({ error: 'Nenhum curso encontrado!' });
  }

  return res.json(searchJson);
});

app.post('/search', (req, res) => {
  const data = req.body;
  const stringSearch = data.category.toLowerCase();

  const searchJson = courses.filter(
    c => c.category.toLowerCase().includes(stringSearch) === true        
  );

  if(data.durationOrder === "asc") searchJson.sort((a,b) => a.duration - b.duration);
  if(data.durationOrder === "desc") searchJson.sort((a,b) => b.duration - a.duration);
  res.status(200).json(searchJson);
});

app.post('/courses', (req, res) => {
  const newCourse = { id: courses.length + 1, ...req.body };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

app.put('/courses/:id', (req, res) => {
  const index = courses.findIndex(c => c.id === parseInt(req.params.id));
  if (index !== -1) {
    courses[index] = { ...courses[index], ...req.body };
    res.json(courses[index]);
  } else {
    res.status(404).json({ error: "Curso não encontrado" });
  }
});

app.delete('/courses/:id', (req, res) => {
  const index = courses.findIndex(c => c.id === parseInt(req.params.id));
  if (index !== -1) {
    courses.splice(index, 1);
    res.json({ message: "Curso removido com sucesso" });
  } else {
    res.status(404).json({ error: "Curso não encontrado" });
  }
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
