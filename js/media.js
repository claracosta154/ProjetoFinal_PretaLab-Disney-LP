
function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);

  let mensagem = "";
  // evite mexer no código acima!

  
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  
  
  /* primeiro comando: 1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( " */

  if (media === 0) {
    mensagem = "Infelizmente você zerou a prova :( ";
  } 
  
  /* Segundo comando: 2. Se a nota for entre 0.1 e 3, mostre na tela: 
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!" */
  else if (media >= 0.1 && media <= 3) {
    mensagem = `Caramba, deu ruim, você obteve media ${media}! Estude mais e tente novamente!`;
  
     /* terceiro comando:  3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
      "Você obteve media {nota}! Falta pouco para a média."*/
  } else if (media >= 3.1 && media <= 5.9) {
    mensagem = `você obteve media ${media}! Estude mais e tente novamente!`;

     /* quarto comando: 4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}" */
  } else if (media >= 6 && media <= 7) {
    mensagem = `você está na média com ${media}`;
  
    /* quinto comando: 5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!" */
  } else if (media >= 7.1 && media <= 9.9) {
    mensage = `Notão! Sua média é ${media}`;
  
    /*6. Se a nota for 10, mostre na tela: 
    "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"*/
    
  } else if (media === 10) {
    mensagem =
      "Hoje é seu aniversário? Porque vocêe está de parabéns! Sua média é 10!!!";

      /* sétimo comando: notas inválidas*/
  } else {
    mensagem = "notas inválidas";
  }

  // evite mexer na linha de código abaixo!
  document.getElementById("situacaoAluno").innerHTML = mensagem;
}
