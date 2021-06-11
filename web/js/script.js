if (window.SimpleSlide) {

	new SimpleSlide({
  slide: "quote", // nome do atributo data-slide="principal"
  time: 5000, // tempo de transição dos slides
});

new SimpleSlide({
  slide: "portfolio",
  nav: true, // nome do atributo data-slide="principal"
  time: 5000, // tempo de transição dos slides
});
}

if (window.SimpleAnime) {
  new SimpleAnime();
}
if (window.SimpleForm) {
  new SimpleForm ({
    form: "formphp",
    button: "#enviar",
    erro: "",
    sucesso: "",
  });
}