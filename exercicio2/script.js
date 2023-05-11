const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
let novaFrase = minhaString.trim()
let substiuicao = novaFrase.replaceAll("________", "sticioso");
console.log(minhaString.length)
console.log(novaFrase.length);
console.log(substiuicao);