# 🎙️ Podcast Manager API (Desafio da DIO)

## 📖 Descrição

Um app ao estilo da Netflix que centraliza diferentes episódios de podcasts separados por lista de categorias.

Com o desenvolvimento desse projeto, aprendi a criar uma API do zero (sem frameworks) utilizando TypeScript. Além disso, aprimorei meus conhecimentos sobre estrutura de projeto em diferentes camadas (cada uma com sua respectiva responsabilidade).

## 🗂️ Instalação local

1. Clone este repositório:

```bash
git clone https://github.com/GracilianoOG/dio-api-podcast-manager.git
```

2. Abra o projeto em sua IDE preferida, exemplo no VSCode:

```bash
cd dio-api-podcast-manager/
```

3. Após navegar para dentro do diretório, inicie o VSCode:

```base
code .
```

4. Instale as dependências:

```
npm install
```

5. Rode o projeto com o script (requer o NodeJS v20+ e NPM instalados):

```
npm run start:watch
```

6. Scripts disponíveis:

```js
"scripts": {
  "start:dev": "tsx --env-file=.env src/server.ts",
  "start:watch": "tsx watch --env-file=.env src/server.ts",
  "dist": "tsup src",
  "start:dist": "npm run dist && node --env-file=.env dist/server.js"
},
```

## 🛠️ Ferramentas e tecnologias

[![Ferramentas](https://skillicons.dev/icons?i=ts,js,nodejs,npm,vscode,postman)](https://skillicons.dev)

- Desenvolvido com TypeScript e Node.js para maior robustez e segurança.
- Utiliza TSUP e TSX para build e execução do código.
- Tipagens do Node.js com `@types/node`.
- Criado e editado com Visual Studio Code.
- API testada com Postman.

## 🔗 Links

- [Digital Innovation One](https://www.dio.me/)

## 🧑🏻‍💻 Autor

- LinkedIn: [@gabrielgmbarros](https://www.linkedin.com/in/gabrielgmbarros)
- GitHub: [@GracilianoOG](https://github.com/GracilianoOG)

## 📝 Licença

O código fonte está sob a licença [MIT](./LICENSE).
