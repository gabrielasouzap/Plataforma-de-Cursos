const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const path = require('path')

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '.')))


let courses = [
  // Programação
  
  { id: "100001", name: "Introdução à Programação", description: "Este curso é perfeito para quem está dando os primeiros passos no mundo da programação. Você aprenderá a lógica por trás dos códigos, entenderá como os computadores processam informações e desenvolverá pequenos programas. Começaremos pelos conceitos básicos, como variáveis, operadores e estruturas de controle, e avançaremos para funções, arrays e introdução à Programação Orientada a Objetos. Ao final, você terá um sólido conhecimento sobre como criar e estruturar programas, além de desenvolver pequenos projetos práticos para aplicar tudo o que aprendeu.", category: "Programação", duration: "40", image: "../assets/cards/introProg.jpg", modules: ["Módulo 1: Introdução", "Módulo 2: Variáveis", "Módulo 3: Condicionais", "Módulo 4: Loops", "Módulo 5: Funções", "Módulo 6: Arrays", "Módulo 7: Objetos", "Módulo 8: Classes", "Módulo 9: Herança", "Módulo 10: Projetos"] },

{ id: "100002", name: "JavaScript do Zero1 ao Avançado", description: "JavaScript é a linguagem essencial para desenvolvimento web, e neste curso, você aprenderá desde os fundamentos até técnicas avançadas para criar aplicações interativas. Iniciaremos com a sintaxe básica da linguagem, explorando variáveis, funções e manipulação do DOM. Em seguida, você aprenderá a trabalhar com eventos, requisições assíncronas e integração com APIs. Também abordaremos conceitos modernos como Promises, Async/Await e Web APIs. No final do curso, você será capaz de desenvolver aplicações web completas e dinâmicas.", category: "Programação", duration: "50", image: "../assets/cards/javass.jpg", modules: ["Módulo 1: Introdução ao JavaScript", "Módulo 2: Sintaxe Básica", "Módulo 3: Funções e Objetos", "Módulo 4: Manipulação de DOM", "Módulo 5: Eventos e Listeners", "Módulo 6: Promises e Async/Await", "Módulo 7: Manipulação de Arrays", "Módulo 8: Web APIs", "Módulo 9: Ferramentas de Desenvolvimento", "Módulo 10: Projetos com JavaScript"] },

{ id: "100003", name: "Python para Iniciantes", description: "Se você deseja aprender uma das linguagens mais populares e versáteis do mundo, este curso é para você. Começaremos com os fundamentos da linguagem, explorando variáveis, tipos de dados e estruturas de controle. Você aprenderá a criar funções, manipular arquivos e utilizar bibliotecas poderosas do Python. Também abordaremos a Programação Orientada a Objetos e o uso do Python para automação e análise de dados. Ao final, você terá experiência prática e poderá desenvolver projetos aplicando suas habilidades.", category: "Programação", duration: "35", image: "../assets/cards/progPython.webp", modules: ["Módulo 1: Introdução ao Python", "Módulo 2: Variáveis e Tipos de Dados", "Módulo 3: Estruturas de Controle", "Módulo 4: Funções e Métodos", "Módulo 5: Manipulação de Arquivos", "Módulo 6: Bibliotecas Python", "Módulo 7: Programação Orientada a Objetos", "Módulo 8: Banco de Dados com Python", "Módulo 9: Web Scraping", "Módulo 10: Projetos em Python"] },

{ id: "100004", name: "Desenvolvimento Web com React", description: "React é uma das bibliotecas mais utilizadas para o desenvolvimento de interfaces modernas e dinâmicas. Neste curso, você aprenderá a construir aplicações web do zero, utilizando conceitos fundamentais como JSX, componentes, props e estado. Exploraremos o uso de hooks, manipulação de eventos e roteamento com React Router. Além disso, você entenderá como gerenciar estados globais com Redux e otimizar a performance da aplicação. Com projetos práticos, você sairá do curso com experiência real no desenvolvimento de aplicações web interativas.", category: "Programação", duration: "45", image: "../assets/cards/desenReact.png", modules: ["Módulo 1: Introdução ao React", "Módulo 2: JSX e Componentes", "Módulo 3: Estado e Props", "Módulo 4: Hooks", "Módulo 5: Manipulação de Eventos", "Módulo 6: Roteamento com React Router", "Módulo 7: Gerenciamento de Estado com Redux", "Módulo 8: Testes com React", "Módulo 9: Otimização de Performance", "Módulo 10: Projetos com React"] },

{ id: "100005", name: "Banco de Dados com MySQL", description: "Os bancos de dados são fundamentais para armazenar e gerenciar informações. Neste curso, você aprenderá a criar, consultar e administrar bancos de dados MySQL. Iniciaremos com a modelagem e criação de tabelas, explorando conceitos como chaves primárias e relacionamentos. Você entenderá como fazer consultas avançadas, criar índices e otimizar a performance das pesquisas. Também abordaremos a segurança no MySQL e boas práticas para gerenciamento de dados. No final do curso, você será capaz de criar e gerenciar bancos de dados eficientes.", category: "Programação", duration: "38", image: "../assets/cards/dbMySQL.webp", modules: ["Módulo 1: Introdução ao MySQL", "Módulo 2: Criação de Banco de Dados", "Módulo 3: Consultas Simples", "Módulo 4: Relacionamentos entre Tabelas", "Módulo 5: Funções e Procedimentos Armazenados", "Módulo 6: Índices e Otimização de Consultas", "Módulo 7: Normalização de Banco de Dados", "Módulo 8: Backup e Recuperação", "Módulo 9: Segurança no MySQL", "Módulo 10: Projetos com MySQL"] },

{ id: "100006", name: "Algoritmos e Estruturas de Dados", description: "Neste curso, você desenvolverá habilidades essenciais para escrever códigos eficientes e resolver problemas complexos. Começaremos com a lógica de algoritmos, abordando listas, pilhas e filas. Você aprenderá como funcionam árvores, grafos e algoritmos de ordenação e busca. Além disso, exploraremos conceitos de complexidade computacional para otimizar soluções. Com projetos práticos, você aplicará seu conhecimento na resolução de desafios de programação.", category: "Programação", duration: "42", image: "../assets/cards/estruturaDados.jpg", modules: ["Módulo 1: Introdução a Algoritmos", "Módulo 2: Estruturas de Dados Lineares", "Módulo 3: Pilhas e Filas", "Módulo 4: Listas Ligadas", "Módulo 5: Árvores", "Módulo 6: Grafos", "Módulo 7: Algoritmos de Ordenação", "Módulo 8: Algoritmos de Busca", "Módulo 9: Complexidade de Algoritmos", "Módulo 10: Projetos com Algoritmos"] },


  // Design
  { id: "100007", name: "Design Gráfico para Iniciantes", description: "Descubra os princípios do design gráfico e aprenda a criar visuais impactantes. Você conhecerá conceitos como teoria das cores, tipografia e composição. Além disso, aprenderá a utilizar ferramentas essenciais para criar logotipos, layouts e materiais gráficos. O curso inclui exercícios práticos para que você desenvolva suas habilidades criativas e produza projetos profissionais.", category: "Design", duration: "25", image: "../assets/cards/designGrafico.jpg", modules: [ "Módulo 1: Introdução ao Design Gráfico", "Módulo 2: Teoria das Cores", "Módulo 3: Tipografia e Fontes", "Módulo 4: Layout e Composição", "Módulo 5: Ferramentas de Design Gráfico", "Módulo 6: Design para Web", "Módulo 7: Branding e Identidade Visual", "Módulo 8: Projetos de Design Gráfico", "Módulo 9: Criação de Cartões e Logos", "Módulo 10: Design para Mídias Sociais"] },

{ id: "100008", name: "Adobe Photoshop Completo", description: "Aprenda a dominar o Photoshop para criação e edição de imagens. Começaremos com a interface e as principais ferramentas, passando por ajustes de cor, máscaras, camadas e efeitos especiais. Você entenderá como manipular imagens, criar composições visuais e desenvolver materiais para redes sociais e web. Ao final, você terá domínio sobre as técnicas e poderá aplicar o Photoshop de maneira profissional.", category: "Design", duration: "40", image: "../assets/cards/photoshop.jpg", modules: ["Módulo 1: Introdução ao Photoshop", "Módulo 2: Ferramentas Básicas de Edição", "Módulo 3: Seleções e Máscaras", "Módulo 4: Camadas e Efeitos", "Módulo 5: Ajustes de Cor e Tonalidade", "Módulo 6: Manipulação de Imagens", "Módulo 7: Efeitos Especiais", "Módulo 8: Design para Web e Imagens para Redes Sociais", "Módulo 9: Retoque e Fotografia", "Módulo 10: Projetos Finais em Photoshop"] },

{ id: "100009", name: "UX/UI Design para Web", description: "Um bom design de interface é essencial para proporcionar uma excelente experiência ao usuário. Neste curso, você aprenderá os fundamentos do UX/UI, desde pesquisa e prototipação até testes de usabilidade. Trabalharemos com ferramentas como Figma e Adobe XD, criando interfaces intuitivas e responsivas. Você desenvolverá projetos práticos e aprenderá como criar experiências envolventes para aplicativos e sites.", category: "Design", duration: "30", image: "../assets/cards/uxUi.jpg", modules: ["Módulo 1: Introdução ao UX/UI", "Módulo 2: Pesquisa de Usuário", "Módulo 3: Prototipagem e Wireframes", "Módulo 4: Design de Interação", "Módulo 5: Usabilidade e Acessibilidade", "Módulo 6: Testes de Usabilidade", "Módulo 7: Design para Móveis", "Módulo 8: Ferramentas de Design UX/UI", "Módulo 9: Design Responsivo", "Módulo 10: Projetos de UX/UI"] },

{ id: "100010", name: "Ilustração Digital para Iniciantes", description: "Se você quer explorar o mundo da ilustração digital, este curso é ideal. Aprenderemos desde os fundamentos do desenho até técnicas avançadas de pintura digital. Você conhecerá ferramentas essenciais para criação de personagens, vetorização e texturização. Com exercícios práticos, desenvolverá ilustrações profissionais para diversas mídias.", category: "Design", duration: "35", image: "../assets/cards/ilustraçãoDigital.png", modules: ["Módulo 1: Introdução à Ilustração Digital", "Módulo 2: Ferramentas de Desenho Digital", "Módulo 3: Técnicas de Sombras e Iluminação", "Módulo 4: Estilos de Ilustração", "Módulo 5: Criação de Personagens", "Módulo 6: Vetorização de Imagens", "Módulo 7: Uso de Camadas", "Módulo 8: Texturização", "Módulo 9: Pintura Digital", "Módulo 10: Projetos de Ilustração"] },

{ id: "100011", name: "Tipografia e Identidade Visual", description: "A tipografia é um dos elementos mais importantes do design. Neste curso, você aprenderá a criar composições tipográficas impactantes e desenvolver identidades visuais fortes para marcas. Exploraremos fontes, hierarquia tipográfica, composição e aplicação do design em diferentes contextos. Você criará projetos práticos para entender como a tipografia influencia na percepção de uma marca.", category: "Design", duration: "28", image: "../assets/cards/idetidadeVisual.jpg", modules: ["Módulo 1: Introdução à Tipografia", "Módulo 2: Anatomia das Letras", "Módulo 3: Fontes e Estilos Tipográficos", "Módulo 4: Layout e Composição Tipográfica", "Módulo 5: Tipografia para Web", "Módulo 6: Hierarquia Tipográfica", "Módulo 7: Criação de Identidade Visual", "Módulo 8: Aplicações de Tipografia em Branding", "Módulo 9: Projeto de Tipografia", "Módulo 10: Exemplos de Identidade Visual"] },

{ id: "100012", name: "Figma para Designers", description: "O Figma é uma das ferramentas mais populares para design de interfaces e prototipagem. Neste curso, você aprenderá a criar wireframes, protótipos interativos e layouts modernos. Exploraremos recursos como componentes reutilizáveis, colaboração em tempo real e design responsivo. Ao final, você terá domínio sobre a ferramenta e poderá desenvolver projetos profissionais.", category: "Design", duration: "32", image: "../assets/cards/figma.webp", modules: ["Módulo 1: Introdução ao Figma", "Módulo 2: Ferramentas Básicas do Figma", "Módulo 3: Criação de Layouts e Wireframes", "Módulo 4: Prototipação Interativa", "Módulo 5: Design Responsivo", "Módulo 6: Componentes e Estilos", "Módulo 7: Colaboração em Tempo Real", "Módulo 8: Plugins no Figma", "Módulo 9: Trabalhando com Equipes", "Módulo 10: Projetos Finais no Figma"] },
  
  // Marketing
  { id: "100013", name: "Marketing Digital Avançado", description: "Este curso aborda as estratégias mais eficazes para o marketing digital. Você aprenderá sobre marketing de conteúdo, SEO, anúncios pagos e automação de campanhas. Exploraremos análise de dados e segmentação de público para criar estratégias assertivas. Ao final, você será capaz de planejar e executar campanhas de marketing digital de alto impacto.", category: "Marketing", duration: "30", image: "../assets/cards/marketing.jpg", modules: ["Módulo 1: Estratégias de Marketing Digital", "Módulo 2: Marketing de Conteúdo", "Módulo 3: Publicidade Pago (PPC)", "Módulo 4: Análise de Dados", "Módulo 5: Automação de Marketing", "Módulo 6: Segmentação de Audiência", "Módulo 7: Influência e Parcerias", "Módulo 8: Campanhas de E-mail Marketing", "Módulo 9: Marketing nas Redes Sociais", "Módulo 10: Projetos de Marketing Digital"] },

{ id: "100014", name: "SEO e Estratégias de Conteúdo", description: "Aprenda como melhorar o posicionamento de sites no Google e atrair mais visitantes. Neste curso, exploraremos técnicas de SEO on-page e off-page, além da criação de conteúdos otimizados. Você entenderá como funciona a pesquisa de palavras-chave e estratégias de link building. Com isso, poderá aplicar SEO de maneira eficiente para aumentar a visibilidade online.", category: "Marketing", duration: "20", image: "../assets/cards/seo.jpg", modules: ["Módulo 1: Fundamentos do SEO", "Módulo 2: Pesquisa de Palavras-chave", "Módulo 3: SEO On-page", "Módulo 4: SEO Off-page", "Módulo 5: Análise de Concorrentes", "Módulo 6: Estratégias de Link Building", "Módulo 7: SEO Local", "Módulo 8: Técnicas Avançadas de SEO", "Módulo 9: Otimização para Móveis", "Módulo 10: Estratégias de Conteúdo SEO"] },

{ id: "100015", name: "Redes Sociais para Negócios", description: "SAs redes sociais são ferramentas poderosas para empresas. Neste curso, você aprenderá a criar estratégias de conteúdo para engajar o público e aumentar a visibilidade da sua marca. Exploraremos as principais plataformas, como Facebook, Instagram, LinkedIn e TikTok, e ensinaremos como analisar métricas e otimizar campanhas.", category: "Marketing", duration: "25", image: "../assets/cards/redesSociais.jpg", modules: ["Módulo 1: Introdução às Redes Sociais", "Módulo 2: Criando Conteúdo Engajador", "Módulo 3: Facebook e Instagram para Negócios", "Módulo 4: Estratégias de Marketing no Twitter", "Módulo 5: LinkedIn para Profissionais", "Módulo 6: Marketing Visual e Vídeos", "Módulo 7: Monitoramento e Análise de Redes", "Módulo 8: Construindo Comunidades", "Módulo 9: Estratégias de Anúncios", "Módulo 10: Analisando Resultados de Redes Sociais"] },

{ id: "100016", name: "Marketing e Automação", description: "Descubra como automatizar campanhas de marketing para gerar mais resultados. Você aprenderá a criar segmentações de público, desenvolver campanhas de e-mail marketing e integrar automações com redes sociais. Exploraremos ferramentas como Mailchimp e RD Station para potencializar suas estratégias de marketing.", category: "Marketing", duration: "27", image: "../assets/cards/markAutomacao.jpg", modules: ["Módulo 1: Introdução ao E-mail Marketing", "Módulo 2: Segmentação de Audiência", "Módulo 3: Criando E-mails Eficientes", "Módulo 4: Automação de Campanhas", "Módulo 5: Ferramentas de E-mail Marketing", "Módulo 6: Testes A/B", "Módulo 7: Análise de Resultados", "Módulo 8: Integrando com Redes Sociais", "Módulo 9: Recuperação de Carrinho Abandonado", "Módulo 10: Projetos de E-mail Marketing"] },

{ id: "100017", name: "Google Ads para Iniciantes", description: "Aprenda a criar campanhas pagas no Google Ads para atrair clientes e aumentar vendas. Você entenderá como funciona a pesquisa de palavras-chave, como configurar anúncios eficazes e otimizar investimentos. Ao final, será capaz de planejar e gerenciar campanhas publicitárias com foco em performance.", category: "Marketing", duration: "30", image: "../assets/cards/googleAds.jpg", modules: ["Módulo 1: Introdução ao Google Ads", "Módulo 2: Pesquisa de Palavras-chave", "Módulo 3: Criação de Campanhas", "Módulo 4: Anúncios de Texto e Display", "Módulo 5: Segmentação de Público", "Módulo 6: Orçamento e Lances", "Módulo 7: Métricas e Relatórios", "Módulo 8: Anúncios em Vídeo", "Módulo 9: Remarketing", "Módulo 10: Estratégias de Google Ads"] },

{ id: "100018", name: "Branding e Posicionamento de Marca", description: "Construir uma marca forte exige estratégia. Neste curso, você aprenderá a desenvolver identidades visuais, criar estratégias de posicionamento e entender como o branding afeta a percepção do público. Exploraremos cases de sucesso e ensinaremos como diferenciar uma marca no mercado.", category: "Marketing", duration: "34", image: "../assets/cards/brandingMarca.jpg", modules: ["Módulo 1: Introdução ao Branding", "Módulo 2: Pesquisa e Identificação de Público", "Módulo 3: Desenvolvimento de Identidade Visual", "Módulo 4: Posicionamento de Marca", "Módulo 5: Branding Emocional", "Módulo 6: Comunicação e Branding", "Módulo 7: Estratégias de Branding Digital", "Módulo 8: Branding para Mídias Sociais", "Módulo 9: Analisando o Mercado", "Módulo 10: Projetos de Branding"] }
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

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});



