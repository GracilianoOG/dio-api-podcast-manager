# Podcast Manager (Desafio da DIO)

## Descrição

Um app ao estilo da Netflix que centraliza diferentes episódios de podcasts separados por categoria.

## Domínio

PodCasts feitos em vídeo.

## Features

- Listar os episódios de PodCasts em sessões de categorias.
  - Programação, tecnologia, inteligência artificial, etc.
- Filtrar episódios pelo nome do PodCast.

## Implementação

### Feature

Listar os episódios dos podcasts em sessões por categoria.

### Desenvolvimento do projeto

Irei retornar em uma API Rest:

- Nome do PodCast;
- Nome do episódio;
- Imagem de capa;
- Link;
- Categoria.

### Formato

```js
[
  {
    podcastName: "flow",
    episode: "FABIO AKITA - Flow #458",
    videoId: "sf4Gxf0LiKo",
    categories: ["ia", "tecnologia"],
  },
  {
    podcastName: "flow",
    episode: "SACANI RESPONDE [VIDA NO UNIVERSO]",
    videoId: "N209olqF23Q",
    categories: ["ciência", "tecnologia"],
  },
];
```
