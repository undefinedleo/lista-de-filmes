var filmsList = [
  "https://bignadaquasar.files.wordpress.com/2013/05/star-wars-episc3b3dio-iv-uma-nova-esperanc3a7a-1977.jpg",

  "https://www.cafecomfilme.com.br/media/k2/items/cache/8b8374e6e7bc3003f8521eb18e56889a_XL.jpg?t=20200521_003122",

  "https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg/240px-Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg",

  "https://br.web.img3.acsta.net/medias/nmedia/18/92/58/12/20207108.jpg",

  "https://br.web.img3.acsta.net/medias/nmedia/18/92/58/33/20207204.jpg",

  "https://i.pinimg.com/originals/ff/be/00/ffbe00fd890d76cf2eb7224e58262be3.jpg",

  "https://www.cineteka.com/img/filmes/014510_big.jpg",

  "https://i2.wp.com/sociedadejedi.com.br/wp-content/uploads/2018/01/the-last-jedi-theatrical-blog.jpg",

  "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/2/527120201013-uau-posters-star-wars-episode-ix-the-rise-of-skywalker-ascencao-2.jpg",

  "https://upload.wikimedia.org/wikipedia/pt/thumb/6/62/Rogue_One_-_A_Star_Wars_Story.jpg/250px-Rogue_One_-_A_Star_Wars_Story.jpg",

  "https://br.web.img3.acsta.net/pictures/18/05/21/17/47/5103671.jpg"
];

let namesFilms = [
  "Star Wars IV: Uma Nova Esperança",

  "Episódio V: O Império Contra-Ataca",

  "Episódio I: A Ameaça Fantasma",

  "Episódio II: Ataque dos Clones",

  "Episódio III: A Vingança dos Sith",

  "Episódio VI: O Retorno de Jedi",

  "Episódio VII: O Despertar da Força",

  "Episódio VIII: Os Últimos Jedi",

  "Episódio IX: A Ascensão Skywalker",

  "Rogue One: Uma História Star Wars",

  "Han Solo: Uma História Star Wars"
];

let movies = document.querySelector(".js");

let toDelete = document.getElementById("delete");

print();
listMovies();

function print() {
  let printMovies = "";
  for (let i = 0; i < filmsList.length; i++) {
    printMovies =
      printMovies +
      "<div><img class='poster' src=" +
      filmsList[i] +
      ' title ="' +
      namesFilms[i] +
      '">' +
      "<figcaption class='nome-filme'>" +
      namesFilms[i] +
      "</figcaption>" +
      "<br></div>";
  }
  movies.innerHTML = printMovies;
}

function adicionarFilme() {
  var filme = document.getElementById("filme").value;
  var nomeFilme = document.getElementById("nomeFilme").value;

  if (
    filme.endsWith(".jpg" || ".png" || ".jpeg" || ".JPG" || ".svg" || ".PNG")
  ) {
    filmsList[filmsList.length] = filme;
    namesFilms[namesFilms.length] = nomeFilme;
    let inserirImagem = `
      <img src=${filme} title="${nomeFilme}">
    `;
    let inserirFilme = document.querySelector(".js");
    inserirFilme.innerHTML = inserirFilme.innerHTML + inserirImagem;
    document.getElementById("inserted").innerHTML =
      "Filme adicionado com sucesso! ✔";
    print();
    listMovies();
  } else {
    //Mostrando mensagem de inválido em caso de formato de imagem não suportada
    document.getElementById("inserted").innerHTML =
      "⚠ Endereço de filme inválido, favor inserir imagens apenas com finais .jpg, .jpeg ou .png ⚠";
  }
  //Limpando o input
  document.getElementById("filme").value = "";
  document.getElementById("nomeFilme").value = "";
  document.getElementById("deleted").innerHTML = "";
}
function listMovies() {
  let listName =
    '<option selected disabled value="">Selecione para deletar</option>';

  for (let i = 0; i < namesFilms.length; i++) {
    listName += "<option value=" + i + ">" + namesFilms[i] + "</option>";
  }
  toDelete.innerHTML = listName;
}

// Deleta filme da lista
function Delete() {
  let selected = document.getElementById("delete").value;
  filmsList.splice(selected, 1);
  namesFilms.splice(selected, 1);

  document.getElementById("deleted").innerHTML = "Filme deletado";

  print();
  listMovies();

  document.getElementById("inserted").innerHTML = "";
}
