const words = "";
let delay = 500;

const typewriter = function (sentence) {
  sentence += "\n"
  for (const char of sentence) {
  setTimeout(()=> {
    process.stdout.write(char)
    }, delay)
    delay += 150
  }
};

typewriter("hello there from lighthouse labs");
typewriter("The quick brown fox jumps over the lazy dog in the green meadows.");