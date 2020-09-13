// Coleção(ões) com documentos

/* Essa é uma réplica da consulta que está no mongo-init.js */

db.usuario.insertMany([
  {
    nome: "Fagner Lima",
    nascimento: new Date("1991-10-15"),
    login: "fagner.lima",
    cidade: "Joao Pessoa-PB",
  },
  {
    nome: "Isabelle Borba",
    nascimento: new Date("1993-08-08"),
    login: "isabelle.borba",
    cidade: "Joao Pessoa-PB",
  },
  {
    nome: "Juan Carlos",
    nascimento: new Date("1988-10-01"),
    login: "juan.carlos",
    cidade: "Joao Pessoa",
  },
  {
    nome: "Suelen Santos",
    nascimento: new Date("1991-06-16"),
    login: "suelen.santos",
    cidade: "Joao Pessoa",
  },
  {
    nome: "Suenia Barros",
    nascimento: new Date("1991-06-16"),
    login: "suenia.barros",
    cidade: "Patos",
  },
  {
    nome: "Elton Leite",
    nascimento: new Date("1991-06-18"),
    login: "elton.leite",
    cidade: "João Pessoa",
  },
  {
    nome: "Camily Ayres",
    nascimento: new Date("1994-04-27"),
    login: "camily.ayres",
    cidade: "João Pessoa",
  },
  {
    nome: "Ana Tereza",
    nascimento: new Date("1985-01-08"),
    login: "ana.tereza",
    cidade: "Patos",
  },
]);

db.video.insertMany([
  {
    codigo: 8001,
    tipo: "Filme",
    nome: "Batman Begins",
    descricao:
      "O jovem Bruce Wayne viaja para o Extremo Oriente, onde recebe treinamento em artes marciais do mestre Henri Ducard, um membro da misteriosa Liga das Sombras.",
    genero: ["acao", "quadrinhos"],
    ano: 2005,
    diretor: "Christopher Nolan",
    censura: 12,
  },
  {
    codigo: 8002,
    tipo: "Filme",
    nome: "Batman - O Cavaleiro das Trevas",
    descricao:
      "Com a ajuda de Jim Gordon e Harvey Dent, Batman tem mantido a ordem na cidade de Gotham.",
    genero: ["acao", "quadrinhos"],
    ano: 2008,
    diretor: "Christopher Nolan",
    censura: 12,
  },
  {
    codigo: 8003,
    tipo: "Filme",
    nome: "Batman - O Cavaleiro das Trevas Ressurge",
    descricao:
      "Após ser culpado pela morte de Harvey Dent e passar de herói a vilão, Batman desaparece.",
    genero: ["acao", "quadrinhos"],
    ano: 2012,
    diretor: "Christopher Nolan",
    censura: 12,
  },
  {
    codigo: 1111,
    tipo: "filme",
    nome: "John Wick",
    descricao:
      "John Wick é uma franquia americana de thriller de ação neo-noir criada pelo roteirista Derek Kolstad...",
    genero: ["acao"],
    ano: 2014,
    diretor: "Chad Stahelski",
    censura: 18,
  },
  {
    codigo: 2222,
    tipo: "serie",
    nome: "The Boys",
    descricao:
      "Os Sete são os heróis mais poderosos da Terra. Porém, esses protetores têm um lado oculto que a maioria das pessoas desconhece",
    genero: ["acao", "aventura"],
    ano: 2019,
    diretor: "Christopher Lennertz",
    censura: 18,
  },
  {
    codigo: 3333,
    tipo: "filme",
    nome: "Django Livre",
    descricao:
      "No sul dos Estados Unidos, o ex-escravo Django faz uma aliança inesperada com o caçador de recompensas Schultz para caçar os criminosos mais procurados do país e resgatar sua esposa de um fazendeiro que força seus escravos a participar de competições mortais",
    genero: ["drama", "acao"],
    ano: 2013,
    diretor: "Quentin Tarantino",
    censura: 18,
  },
  {
    codigo: 4444,
    tipo: "filme",
    nome: "Kill Bill: Volume 2",
    descricao:
      "Noiva assassina é traída por antigo grupo e fica em coma por quatro anos. Quando acorda, procura vingança e mata seus companheiros um por um. Ao confrontar seu antigo mestre e amante, uma surpresa a espera.",
    genero: ["acao", "aventura"],
    ano: 2004,
    diretor: "Quentin Tarantino",
    censura: 18,
  },
  {
    codigo: 8111,
    tipo: "filme",
    nome: "Clube da Luta",
    descricao: "Muita pé na cara e soco na cara",
    genero: ["acao"],
    ano: 1982,
    diretor: "Peter Paker",
    censura: 18,
  },
  {
    codigo: 8112,
    tipo: "serie",
    nome: "Stranger Things",
    descricao: "Muita pé na cara e soco na cara",
    genero: ["acao", "aventura"],
    ano: 1991,
    diretor: "Peter Paker",
    censura: 12,
  },
  {
    codigo: 8113,
    tipo: "filme",
    nome: "Xuxa só para baixinhos",
    descricao: "Filme especifico para anões",
    genero: ["comedia"],
    ano: 2000,
    diretor: "Mussum",
    censura: 13,
  },
  {
    codigo: 8114,
    tipo: "serie",
    nome: "Chiquititas",
    descricao: "Mexe mexe mexe com as mãos",
    genero: ["novela", "infantil"],
    ano: 1992,
    diretor: "Silvio Santos",
    censura: 0,
  },
]);

// Cria dados iniciais
db.avaliacao.insertMany([
  {
    usuario: db.usuario.findOne({ login: "fagner.lima" })._id,
    video: db.video.findOne({ codigo: 8001 })._id,
    nota: 5,
    comentario: "Otima historia de origem!",
    data: new Date(),
  },
  {
    usuario: db.usuario.findOne({ login: "fagner.lima" })._id,
    video: db.video.findOne({ codigo: 8002 })._id,
    nota: 5,
    comentario: "O melhor filme de super heroi!",
    data: new Date(),
  },
  {
    usuario: db.usuario.findOne({ login: "fagner.lima" })._id,
    video: db.video.findOne({ codigo: 8003 })._id,
    nota: 5,
    comentario: "Grande fechamento da trilogia!",
    data: new Date(),
  },
  {
    usuario: db.usuario.findOne({ login: "isabelle.borba" })._id,
    video: db.video.findOne({ codigo: 8003 })._id,
    nota: 4,
    comentario: "Emocionante!",
    data: new Date(),
  },
  {
    usuario: db.usuario.findOne({ login: "juan.carlos" })._id,
    video: db.video.findOne({ codigo: 3333 })._id,
    nota: 5,
    comentario: "Filme e uma obra de arte...",
    data: new Date("2020-09-12"),
  },
  {
    usuario: db.usuario.findOne({ login: "juan.carlos" })._id,
    video: db.video.findOne({ codigo: 1111 })._id,
    nota: 5,
    comentario: "E de prender o folego",
    data: new Date("2020-09-12"),
  },
  {
    usuario: db.usuario.findOne({ login: "suelen.santos" })._id,
    video: db.video.findOne({ codigo: 4444 })._id,
    nota: 3,
    comentario: "Bom filme",
    data: new Date("2020-09-12"),
  },
  {
    usuario: db.usuario.findOne({ login: "suenia.barros" })._id,
    video: db.video.findOne({ codigo: 2222 })._id,
    nota: 2,
    comentario: "Nao gostei muito",
    data: new Date("2020-09-12"),
  },
  {
    usuario: db.usuario.findOne({ login: "elton.leite" })._id,
    video: db.video.findOne({ codigo: 8114 })._id,
    nota: 2,
    comentario: "Devia ter mais violência",
    data: new Date(),
  },
  {
    usuario: db.usuario.findOne({ login: "camily.ayres" })._id,
    video: db.video.findOne({ codigo: 8112 })._id,
    nota: 5,
    comentario: "Emocionei, muito bom",
    data: new Date(),
  },
  {
    usuario: db.usuario.findOne({ login: "ana.tereza" })._id,
    video: db.video.findOne({ codigo: 8112 })._id,
    nota: 3,
    comentario: "Chorei e sorri, foi muito importante as emoções que eu senti",
    data: new Date(),
  },
  {
    usuario: db.usuario.findOne({ login: "elton.leite" })._id,
    video: db.video.findOne({ codigo: 8111 })._id,
    nota: 5,
    comentario: "Muita violência e sangue jorrando!!!",
    data: new Date(),
  },
]);

// 1. Operações de CRUD:

// 1.1 Inserções diversas

db.usuario.insert({ login: "wrong.user" });

// 1.2 Atualizações: pelo menos 02

db.video.update(
  { codigo: 8113 },
  {
    $set: {
      descricao:
        "Só Para Baixinhos é o vigésimo terceiro álbum de estúdio e o décimo sétimo em português da cantora e apresentadora brasileira",
    },
  }
);
db.usuario.update(
  { login: "wrong.user" },
  { $set: { nome: "Erro de cadastro" } }
);

// 1.3 Remoção (01)

db.usuario.deleteOne({ login: "wrong.user" });

// 2 Consultas diversas

// 2.1 com Coleção inteira

db.usuario.find();

db.video.find();

db.avaliacao.find();

// 2.2 Contagem de documentos na coleção

db.usuario.count();

db.video.count();

db.avaliacao.count();

// 2.3 03 consultas com filtros diversos (IN, GT, etc), sem projeção

// 2.3.1 Videos com ano de produção maior igual a 2000
db.video.find({
  ano: { $gte: 2000 },
});

// 2.3.2 Videos que possuam o genero aventura
db.video.find({
  genero: { $all: ["aventura"] },
});

// 2.3.3 Usuarios com o login juan.carlos e suelen.santos
db.usuario.find({
  login: { $in: ["juan.carlos", "suelen.santos"] },
});

// 3. Consultas com filtros diversos, com projeção

db.avaliacao.find(
  {
    nota: { $gte: 3 },
  },
  { nota: 1, comentario: 1, data: 1, _id: 0 }
);

// avaliacoes:(nota, comentario e data) do usuario de login juan.carlos
db.avaliacao.find(
  {
    usuario: db.usuario.findOne({ login: "juan.carlos" })._id,
  },
  { nota: 1, comentario: 1, data: 1, _id: 0 }
);

// listar dados dos vídeos do tipo "serie"
db.video.find(
  {
    tipo: "serie",
  },
  { nome: 1, descricao: 1, genero: 1, ano: 1, diretor: 1, censura: 1, _id: 0 }
);

// 4. 01 consulta com filtro, projeção e uso de expressão regular

// 4.1 Busca de login e cidade de usuários que nasceram em uma cidade iniciado com Jo retornando em formato json
db.usuario
  .find({ cidade: { $regex: "Jo" } }, { login: 1, cidade: 1 })
  .forEach(printjson);

// 5. Consultas com acesso a array de elementos

// 5.1 Media de indicação por gêneros
db.video
  .aggregate([
    {
      $group: {
        _id: "$genero",
        media_censura_por_generos: { $avg: "$censura" },
      },
    },
  ])
  .forEach(printjson);

// 6. 02 consultas com acesso a estrutura embutida

db.video.aggregate([
  {
    $lookup: {
      from: "avaliacao",
      localField: "_id",
      foreignField: "video",
      as: "avaliacoes",
    },
  },
]);

db.avaliacao.aggregate([
  {
    $lookup: {
      from: "usuario",
      localField: "usuario",
      foreignField: "_id",
      as: "avaliador",
    },
  },

  {
    $lookup: {
      from: "video",
      localField: "video",
      foreignField: "_id",
      as: "videoAvaliado",
    },
  },
]);

// 7. 02 consultas diferentes com aggregate
// 7.1 Média das avaliações
db.avaliacao.aggregate([
  {
    $group: {
      _id: "$video",
      notaMedia: {
        $avg: "$nota",
      },
    },
  },
]);

// 7.2 Total e média de avaliações dos filmes ordenados pelo ano
db.avaliacao.aggregate([
  {
    $group: {
      _id: {
        video: "$video",
      },
      notaMedia: {
        $avg: "$nota",
      },
      totalAvaliacoes: {
        $sum: 1,
      },
    },
  },
  {
    $lookup: {
      from: "video",
      localField: "_id.video",
      foreignField: "_id",
      as: "videoAvaliado",
    },
  },
  {
    $project: {
      _id: 0,
      videoAvaliado: {
        $arrayElemAt: ["$videoAvaliado", 0],
      },
      notaMedia: 1,
      totalAvaliacoes: 1,
    },
  },
  {
    $sort: {
      "videoAvaliado.ano": 1,
    },
  },
]);

// 8. 01 consulta com lookup

db.video.aggregate([
  { $match: { codigo: 8001 } },
  {
    $lookup: {
      from: "avaliacao",
      localField: "_id",
      foreignField: "video",
      as: "avaliacoes",
    },
  },
]);

// 9. 01 consulta a seu critério explicando o porquê dela.

//** Achamos importante demonstrar uma consulta com paginação */

db.usuario.find().limit(10).skip(0); // busca com paginação

db.video.find().limit(10).skip(0); // busca com paginação
