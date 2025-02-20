const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let courses = [
  // Programação
  
  { id: "100001", name: "Introdução à Programação", description: "Aprenda os fundamentos da programação.", category: "Programação", duration: "40", image: "assets/cards/introProg.jpg", modules: ["Módulo 1: Introdução", "Módulo 2: Variáveis", "Módulo 3: Condicionais", "Módulo 4: Loops", "Módulo 5: Funções", "Módulo 6: Arrays", "Módulo 7: Objetos", "Módulo 8: Classes", "Módulo 9: Herança", "Módulo 10: Projetos"] },

{ id: "100002", name: "JavaScript do Zero1 ao Avançado", description: "Domine JavaScript e construa aplicações web dinâmicas.", category: "Programação", duration: "50", image: "https://example.com/images/javascript.jpg", modules: ["Módulo 1: Introdução ao JavaScript", "Módulo 2: Sintaxe Básica", "Módulo 3: Funções e Objetos", "Módulo 4: Manipulação de DOM", "Módulo 5: Eventos e Listeners", "Módulo 6: Promises e Async/Await", "Módulo 7: Manipulação de Arrays", "Módulo 8: Web APIs", "Módulo 9: Ferramentas de Desenvolvimento", "Módulo 10: Projetos com JavaScript"] },

{ id: "100003", name: "Python para Iniciantes", description: "Aprenda Python do básico ao intermediário.", category: "Programação", duration: "35", image: "https://example.com/images/python.jpg", modules: ["Módulo 1: Introdução ao Python", "Módulo 2: Variáveis e Tipos de Dados", "Módulo 3: Estruturas de Controle", "Módulo 4: Funções e Métodos", "Módulo 5: Manipulação de Arquivos", "Módulo 6: Bibliotecas Python", "Módulo 7: Programação Orientada a Objetos", "Módulo 8: Banco de Dados com Python", "Módulo 9: Web Scraping", "Módulo 10: Projetos em Python"] },

{ id: "100004", name: "Desenvolvimento Web com React", description: "Aprenda a desenvolver aplicações web modernas com React.", category: "Programação", duration: "45", image: "https://example.com/images/react.jpg", modules: ["Módulo 1: Introdução ao React", "Módulo 2: JSX e Componentes", "Módulo 3: Estado e Props", "Módulo 4: Hooks", "Módulo 5: Manipulação de Eventos", "Módulo 6: Roteamento com React Router", "Módulo 7: Gerenciamento de Estado com Redux", "Módulo 8: Testes com React", "Módulo 9: Otimização de Performance", "Módulo 10: Projetos com React"] },

{ id: "100005", name: "Banco de Dados com MySQL", description: "Entenda a modelagem e manipulação de dados com MySQL.", category: "Programação", duration: "38", image: "https://example.com/images/mysql.jpg", modules: ["Módulo 1: Introdução ao MySQL", "Módulo 2: Criação de Banco de Dados", "Módulo 3: Consultas Simples", "Módulo 4: Relacionamentos entre Tabelas", "Módulo 5: Funções e Procedimentos Armazenados", "Módulo 6: Índices e Otimização de Consultas", "Módulo 7: Normalização de Banco de Dados", "Módulo 8: Backup e Recuperação", "Módulo 9: Segurança no MySQL", "Módulo 10: Projetos com MySQL"] },

{ id: "100006", name: "Algoritmos e Estruturas de Dados", description: "Aprenda algoritmos essenciais e estruturas de dados fundamentais.", category: "Programação", duration: "42", image: "https://example.com/images/algoritmos.jpg", modules: ["Módulo 1: Introdução a Algoritmos", "Módulo 2: Estruturas de Dados Lineares", "Módulo 3: Pilhas e Filas", "Módulo 4: Listas Ligadas", "Módulo 5: Árvores", "Módulo 6: Grafos", "Módulo 7: Algoritmos de Ordenação", "Módulo 8: Algoritmos de Busca", "Módulo 9: Complexidade de Algoritmos", "Módulo 10: Projetos com Algoritmos"] },


  // Design
  { id: "100007", name: "Design Gráfico para Iniciantes", description: "Descubra os conceitos básicos do design gráfico.", category: "Design", duration: "25", image: "https://example.com/images/design.jpg", modules: ["Módulo 1: Introdução ao Design Gráfico", "Módulo 2: Teoria das Cores", "Módulo 3: Tipografia e Fontes", "Módulo 4: Layout e Composição", "Módulo 5: Ferramentas de Design Gráfico", "Módulo 6: Design para Web", "Módulo 7: Branding e Identidade Visual", "Módulo 8: Projetos de Design Gráfico", "Módulo 9: Criação de Cartões e Logos", "Módulo 10: Design para Mídias Sociais"] },

{ id: "100008", name: "Adobe Photoshop Completo", description: "Aprenda a usar o Photoshop para criação e edição de imagens.", category: "Design", duration: "40", image: "https://example.com/images/photoshop.jpg", modules: ["Módulo 1: Introdução ao Photoshop", "Módulo 2: Ferramentas Básicas de Edição", "Módulo 3: Seleções e Máscaras", "Módulo 4: Camadas e Efeitos", "Módulo 5: Ajustes de Cor e Tonalidade", "Módulo 6: Manipulação de Imagens", "Módulo 7: Efeitos Especiais", "Módulo 8: Design para Web e Imagens para Redes Sociais", "Módulo 9: Retoque e Fotografia", "Módulo 10: Projetos Finais em Photoshop"] },

{ id: "100009", name: "UX/UI Design para Web", description: "Aprenda os fundamentos do design de experiência do usuário.", category: "Design", duration: "30", image: "https://example.com/images/uxui.jpg", modules: ["Módulo 1: Introdução ao UX/UI", "Módulo 2: Pesquisa de Usuário", "Módulo 3: Prototipagem e Wireframes", "Módulo 4: Design de Interação", "Módulo 5: Usabilidade e Acessibilidade", "Módulo 6: Testes de Usabilidade", "Módulo 7: Design para Móveis", "Módulo 8: Ferramentas de Design UX/UI", "Módulo 9: Design Responsivo", "Módulo 10: Projetos de UX/UI"] },

{ id: "100010", name: "Ilustração Digital para Iniciantes", description: "Aprenda técnicas básicas para criar ilustrações digitais.", category: "Design", duration: "35", image: "https://example.com/images/ilustracao.jpg", modules: ["Módulo 1: Introdução à Ilustração Digital", "Módulo 2: Ferramentas de Desenho Digital", "Módulo 3: Técnicas de Sombras e Iluminação", "Módulo 4: Estilos de Ilustração", "Módulo 5: Criação de Personagens", "Módulo 6: Vetorização de Imagens", "Módulo 7: Uso de Camadas", "Módulo 8: Texturização", "Módulo 9: Pintura Digital", "Módulo 10: Projetos de Ilustração"] },

{ id: "100011", name: "Tipografia e Identidade Visual", description: "Entenda como a tipografia impacta no design e branding.", category: "Design", duration: "28", image: "https://example.com/images/tipografia.jpg", modules: ["Módulo 1: Introdução à Tipografia", "Módulo 2: Anatomia das Letras", "Módulo 3: Fontes e Estilos Tipográficos", "Módulo 4: Layout e Composição Tipográfica", "Módulo 5: Tipografia para Web", "Módulo 6: Hierarquia Tipográfica", "Módulo 7: Criação de Identidade Visual", "Módulo 8: Aplicações de Tipografia em Branding", "Módulo 9: Projeto de Tipografia", "Módulo 10: Exemplos de Identidade Visual"] },

{ id: "100012", name: "Figma para Designers", description: "Aprenda a criar protótipos e wireframes com Figma.", category: "Design", duration: "32", image: "https://example.com/images/figma.jpg", modules: ["Módulo 1: Introdução ao Figma", "Módulo 2: Ferramentas Básicas do Figma", "Módulo 3: Criação de Layouts e Wireframes", "Módulo 4: Prototipação Interativa", "Módulo 5: Design Responsivo", "Módulo 6: Componentes e Estilos", "Módulo 7: Colaboração em Tempo Real", "Módulo 8: Plugins no Figma", "Módulo 9: Trabalhando com Equipes", "Módulo 10: Projetos Finais no Figma"] },
  
  // Marketing
  { id: "100013", name: "Marketing Digital Avançado", description: "Estratégias avançadas em marketing digital.", category: "Marketing", duration: "30", image: "https://example.com/images/marketing.jpg", modules: ["Módulo 1: Estratégias de Marketing Digital", "Módulo 2: Marketing de Conteúdo", "Módulo 3: Publicidade Pago (PPC)", "Módulo 4: Análise de Dados", "Módulo 5: Automação de Marketing", "Módulo 6: Segmentação de Audiência", "Módulo 7: Influência e Parcerias", "Módulo 8: Campanhas de E-mail Marketing", "Módulo 9: Marketing nas Redes Sociais", "Módulo 10: Projetos de Marketing Digital"] },

{ id: "100014", name: "SEO e Estratégias de Conteúdo", description: "Aprenda SEO e como melhorar seu ranqueamento no Google.", category: "Marketing", duration: "20", image: "https://example.com/images/seo.jpg", modules: ["Módulo 1: Fundamentos do SEO", "Módulo 2: Pesquisa de Palavras-chave", "Módulo 3: SEO On-page", "Módulo 4: SEO Off-page", "Módulo 5: Análise de Concorrentes", "Módulo 6: Estratégias de Link Building", "Módulo 7: SEO Local", "Módulo 8: Técnicas Avançadas de SEO", "Módulo 9: Otimização para Móveis", "Módulo 10: Estratégias de Conteúdo SEO"] },

{ id: "100015", name: "Redes Sociais para Negócios", description: "Saiba como alavancar seu negócio usando redes sociais.", category: "Marketing", duration: "25", image: "https://example.com/images/socialmedia.jpg", modules: ["Módulo 1: Introdução às Redes Sociais", "Módulo 2: Criando Conteúdo Engajador", "Módulo 3: Facebook e Instagram para Negócios", "Módulo 4: Estratégias de Marketing no Twitter", "Módulo 5: LinkedIn para Profissionais", "Módulo 6: Marketing Visual e Vídeos", "Módulo 7: Monitoramento e Análise de Redes", "Módulo 8: Construindo Comunidades", "Módulo 9: Estratégias de Anúncios", "Módulo 10: Analisando Resultados de Redes Sociais"] },

{ id: "100016", name: "Marketing e Automação", description: "Aprenda a criar campanhas eficazes de e-mail marketing.", category: "Marketing", duration: "27", image: "https://example.com/images/emailmarketing.jpg", modules: ["Módulo 1: Introdução ao E-mail Marketing", "Módulo 2: Segmentação de Audiência", "Módulo 3: Criando E-mails Eficientes", "Módulo 4: Automação de Campanhas", "Módulo 5: Ferramentas de E-mail Marketing", "Módulo 6: Testes A/B", "Módulo 7: Análise de Resultados", "Módulo 8: Integrando com Redes Sociais", "Módulo 9: Recuperação de Carrinho Abandonado", "Módulo 10: Projetos de E-mail Marketing"] },

{ id: "100017", name: "Google Ads para Iniciantes", description: "Aprenda a criar campanhas no Google Ads para atrair clientes.", category: "Marketing", duration: "30", image: "https://example.com/images/googleads.jpg", modules: ["Módulo 1: Introdução ao Google Ads", "Módulo 2: Pesquisa de Palavras-chave", "Módulo 3: Criação de Campanhas", "Módulo 4: Anúncios de Texto e Display", "Módulo 5: Segmentação de Público", "Módulo 6: Orçamento e Lances", "Módulo 7: Métricas e Relatórios", "Módulo 8: Anúncios em Vídeo", "Módulo 9: Remarketing", "Módulo 10: Estratégias de Google Ads"] },

{ id: "100018", name: "Branding e Posicionamento de Marca", description: "Aprenda a criar uma identidade forte para sua marca.", category: "Marketing", duration: "34", image: "https://example.com/images/branding.jpg", modules: ["Módulo 1: Introdução ao Branding", "Módulo 2: Pesquisa e Identificação de Público", "Módulo 3: Desenvolvimento de Identidade Visual", "Módulo 4: Posicionamento de Marca", "Módulo 5: Branding Emocional", "Módulo 6: Comunicação e Branding", "Módulo 7: Estratégias de Branding Digital", "Módulo 8: Branding para Mídias Sociais", "Módulo 9: Analisando o Mercado", "Módulo 10: Projetos de Branding"] }
];

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.get('/courses/:id', (req, res) => {
  const course = courses.filter(c => c.id === req.params.id);
  res.json(course)
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
  console.log(data)
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
  const index = courses.findIndex(c => c.id === req.params.id);
  if (index !== -1) {
    courses[index] = { ...courses[index], ...req.body };
    res.json(courses[index]);
  } else {
    res.status(404).json({ error: "Curso não encontrado" });
  }
});

app.delete('/courses/:id', (req, res) => {
  const index = courses.findIndex(c => c.id === req.params.id);
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




