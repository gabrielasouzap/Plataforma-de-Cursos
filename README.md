#  Plataforma de Cursos Online

##  Descrição
Este projeto é uma plataforma de cursos online desenvolvida utilizando **HTML, CSS e JavaScript**. O site permite a exibição de cursos dinâmicos a partir de uma **API mock**, que armazena os dados dos cursos. As páginas são dinâmicas, permitindo que os cursos sejam carregados automaticamente.

---

##  Screenshot do Projeto
![Screenshot do Projeto](../assets/imgReadme.png)

---

## 🛠 Tecnologias Utilizadas
- **HTML**
- **CSS**
- **JavaScript**
- **Express.js** (para servir a API mock)
- **API Mock** (para armazenar os dados dos cursos)

---

##  Como Rodar o Projeto
### 🔹 Clonar o repositório
```sh
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
```

### 🔹 Instalar dependências  
Antes de iniciar o projeto, **navegue até a pasta `backend`** e instale as dependências necessárias:
```sh
cd backend
npm run start
```

### 🔹 Iniciar a API Mock  
O projeto utiliza o **Express.js** para rodar a API mock. Certifique-se de que a **porta 3000 está livre** antes de iniciar, pois a API mock fornecerá os dados dos cursos para a aplicação.

Para iniciar a API mock, **execute dentro da pasta `backend`**:
```sh
node apiMock.js
```

### 🔹 Abrir o arquivo no navegador  
Após iniciar a API mock, você pode visualizar a plataforma acessando o arquivo HTML diretamente no navegador:
```
http://localhost:3000/home
```

---

##  Funcionalidades
- Responsivo para diferentes dispositivos.  
- Cada curso possui um **ID único**.  
- Permite **filtrar cursos por categoria**.  
- Permite **ordenar cursos por duração** (ascendente e descendente).  
- Barra de pesquisa para **buscar cursos pelo nome**.  
- Páginas dinâmicas para exibição de **cursos individuais**. 
 
## ❌ Funcionalidades que ainda não estão funcionando:
🔹 Ícone de usuário na página principal.
🔹 Barra de pesquisa na segunda página (detalhes do curso).
---

##  Melhorias Futuras
🔹 Melhor organização do código e estrutura do backend.  
🔹 Implementação de um **banco de dados real**.  
🔹 Melhor desempenho e otimização das requisições.  
🔹 Autenticação de usuários para acompanhamento de cursos.  


