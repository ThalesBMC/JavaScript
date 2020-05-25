var database = [
  {
    username: "thales",
    password: "123",
  },
  {
    username: "sergio",
    password: "1452142123",
  },
  {
    username: "thiago",
    password: "12356",
  },
  {
    username: "franklin",
    password: "123123",
  },
  {
    username: "joao",
    password: "122133",
  },
];
var newsfeed = [
  {
    username: "Claudemir",
    timeline: "tou loco",
  },

  {
    username: "franklin",
    timeline: "q preguica",
  },
  {
    username: "thiago",
    timeline: "vamo jogar",
  },
];
var usernameCheck = prompt("Qual seu nome?");
var passwordCheck = prompt("Qual sua senha?");

function valid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function singIn(username, password) {
  var verificar = valid(username, password);

  if (verificar === true) {
    alert("logou");
    console.log(newsfeed);
  } else {
    alert("credenciais erradas");
  }
}
singIn(usernameCheck, passwordCheck);
//if (username === database[0].username && password === database[0].password) {
//console.log(newsfeed);
//} else {
//  alert("wrong password ou username");
//}
if ((1 + 1 = 2)) {
  if ((3 + 4 = 8)) {
  } else {
    console.log("de dentro");
  }
} else {
  console.log("de fora");
}
