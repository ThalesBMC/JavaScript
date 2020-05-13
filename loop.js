var todos = [
  "fazer fisio",
  "comecar a estudar",
  "usar tomatoes",
  " descansar",
  "De pouqinho e pouqinho",
];
console.log(todos);
for (var i = 0; i < todos.length; i++) {
  todos[i] = todos[i] + "!";
}
todos.forEach(function (todo, i) {
  console.log(todo, i);
});
