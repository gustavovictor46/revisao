let energiaCharmander = 80;
let energiaPikachu = 80;

let rodada = 1;

let ataqueCharmander = 0;
let ataquePikachu = 0;

while (energiaCharmander > 0 && energiaPikachu > 0) {
    console.log("🔁 Rodada", rodada);

    let ataqueCharmander = Math.floor(Math.random() * (22-8+1)+8);
    let ataquePikachu = Math.floor(Math.random() * (25-10-1)+10);

    energiaCharmander = energiaCharmander - ataquePikachu;
    energiaPikachu = energiaPikachu - ataqueCharmander;

    console.log("🔥 Charmander deu", ataqueCharmander, "de dano!");
    console.log("⚡Pikachu deu", ataquePikachu, "de dano!");

    console.log("🔥 Vida do Charmander:", energiaCharmander);
    console.log("⚡ Vida do Pikachu", energiaPikachu);
    console.log("------------★---------------");

    rodada++;
}

if (energiaCharmander <=0 && energiaPikachu <=0){
    console.log("😮 Empate! Os dois foram pro chão ao mesmo tempo!");
} else if (energiaCharmander > energiaPikachu){
    console.log("🏆 Charmander venceu com seu ataque Ember!")
} else {
    console.log("🏆 Pikachu venceu com um trovão final!")
}