function getResponse() {
  var input = document.getElementById("input").value;
  var output = document.getElementById("output");
  // Aturan-aturan sederhana berdasarkan input pengguna
  if (input.toLowerCase().indexOf("edukasi") !== -1) {
    output.innerHTML = "1.game pembelajaran bahasa 2.game matematika 3.game kuis 4.game puzzle 5.dan game simulasi. ";
  } else if (input.toLowerCase().indexOf("aksi") !== -1) {
    output.innerHTML = "1.free fire 2.pugb mobile 3.genshin inpact 4.Dead Trigger2 5.Modern Combat 5: eSports FPS";
  } else if (input.toLowerCase().indexOf("tekateki") !== -1) {
    output.innerHTML ="1.Brain test Triky puzzle 2.Word Crossword Search 3.QuizzLand: Tanya dan Jawab .";
  } else if ( input.toLowerCase().indexOf("horror") !== -1) {
    output.innerHTML = "1.True Fear: Forsaken Souls1 2.Emily Wants to Play 3.Horrorfield 4.Japanese Doll";
  } else if (input.toLowerCase().indexOf("mobil balap") !== -1) {
    output.innerHTML = "1.Mario Kart Tour 2.Real Racing3 3.Need for Speed: No Limits 4.Asphalt 9 Legends.";
  } else if (input.toLowerCase().indexOf("buat anak") !== -1) {
    output.innerHTML = "1.Toca Life World 2.Coloring & Learn,Baby Panda's Body Adventure 3.Puzzle Kids – Animals Shapes and Jigsaw Puzzle";
  } else if (input.toLowerCase().indexOf("olahraga ") !== -1) {
    output.innerHTML ="1.EA Sports FC Mobile 2.NBA Live Mobile Basketball 3.Real Boxing 2 4.Golf Clash - Golfing Simulator";
  } else if ( input.toLowerCase().indexOf("petualang") !== -1) {
    output.innerHTML = "1.Crashland 2.Doom and Destiny Advanced 3.Lara Croft GO 4.Minicraft Pocket Edition 5.Secret of Mana";
 } else {
    output.innerHTML = "Maaf, saya tidak mengerti apa yang Anda maksud.";
  }
}
