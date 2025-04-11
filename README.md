# Batalha Pokémon: Charmander vs Pikachu
Fizemos uma simulação de uma batalha Pokémon entre Charmander vs Pikachu utilizando os nossos conhecimentos adquiridos nos últimos 3 meses de aula de JavaScript no Senai!

✅ Regras da Batalha:
Pikachu e Charmander começam com 80 pontos de energia.

Em cada rodada:

Pikachu lança um ataque com dano aleatório entre 10 e 25 pontos.

Charmander revida com um ataque de dano aleatório entre 8 e 22 pontos.

A batalha continua até que um dos dois (ou os dois) cheguem a 0 ou menos de energia.

## Código e comentários explicando o código

```javascript
// Declaração de variáveis dos Pokémon e sua energia inicial
let energiaCharmander = 80;
let energiaPikachu = 80;

// Variável das rodadas
let rodada = 1;

// Variáveis dos ataques de cada Pokémon
let ataqueCharmander = 0;
let ataquePikachu = 0;

// Luta! Aqui temos um loop de repetição onde está documentada a batalha épica entre os dois pokémons, o looping para quando a energia de um deles chegar a 0
while (energiaCharmander > 0 && energiaPikachu > 0) {
    console.log("🔁 Rodada", rodada);

    // Variáveis dos golpes (não redeclarar aqui, pois elas já existem fora do loop)
    ataqueCharmander = Math.floor(Math.random() * (22 - 8 + 1) + 8); // Ataque de Charmander entre 8 e 22
    ataquePikachu = Math.floor(Math.random() * (25 - 10 + 1) + 10); // Ataque de Pikachu entre 10 e 25

    // Aplicação dos golpes, modificando a energia de cada um
    energiaCharmander -= ataquePikachu; // Charmander perde energia pelo ataque de Pikachu
    energiaPikachu -= ataqueCharmander; // Pikachu perde energia pelo ataque de Charmander

    // Imprimir saída do ataque de cada um
    console.log("🔥 Charmander deu", ataqueCharmander, "de dano!");
    console.log("⚡ Pikachu deu", ataquePikachu, "de dano!");

    // Imprimir vida restante de cada um
    console.log("🔥 Vida do Charmander:", energiaCharmander);
    console.log("⚡ Vida do Pikachu:", energiaPikachu);
    console.log("------------★---------------");

    // Próxima rodada
    rodada++;
}

// Condicional que mostra os resultados de cada rodada
if (energiaCharmander <= 0 && energiaPikachu <= 0) {
    console.log("😮 Empate! Os dois foram pro chão ao mesmo tempo!");
} else if (energiaCharmander > energiaPikachu) {
    console.log("🏆 Charmander venceu com seu ataque Ember!");
} else {
    console.log("🏆 Pikachu venceu com um trovão final!");
}
