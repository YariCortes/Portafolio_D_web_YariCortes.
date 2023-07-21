let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 95,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Me gusta ayudar a construir tus grandes ideas de desarrollo web.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
  