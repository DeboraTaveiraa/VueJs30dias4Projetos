new Vue({
  el: "#app",
  data: {
    categoria: "Fruta",
    lista: ["ABACATE", "PERA", "CARAMBOLA", "CAJU", "GOIABA"],
    respostaOculta: true,
    respostaVisivel: false,
    erroOculto: true,
    erroVisivel: false,
    qtdLetras: 0,
    corFruta: "",
    primaryLetter: "",
    respostaUser: "",
    frutaAleatoria: "",
  },
  computed: {
    resposta() {
      // escolha aleatória de uma fruta como resposta
      const random = Math.random() * (5 - 0) + 0;
      const floor = Math.floor(random);
      const arrResposta = this.lista[floor];

      // condição que pegará a fruta aleatória gerada acima
      // caso a fruta seja a mesma que está no índice [n]
      // vai ser armazenado nas variáveis que serão as dicas:
      // quantidade de letras, cor da fruta e também
      // será coletado a primeira letra da fruta
      switch (arrResposta) {
        case this.lista[0]:
          this.qtdLetras = this.lista[0].length;
          this.corFruta = "Verde";
          this.primaryLetter = arrResposta[0];
          this.frutaAleatoria = this.lista[0];
          return this.frutaAleatoria;
          break;
        case this.lista[1]:
          this.qtdLetras = this.lista[1].length;
          this.corFruta = "Verde/Amarelo";
          this.primaryLetter = arrResposta[0];
          this.frutaAleatoria = this.lista[1];
          return this.frutaAleatoria;
          break;
        case this.lista[2]:
          this.qtdLetras = this.lista[2].length;
          this.corFruta = "Amarelo";
          this.primaryLetter = arrResposta[0];
          this.frutaAleatoria = this.lista[2];
          return this.frutaAleatoria;
          break;
        case this.lista[3]:
          this.qtdLetras = this.lista[3].length;
          this.corFruta = "Amarelo/Vermelho";
          this.primaryLetter = arrResposta[0];
          this.frutaAleatoria = this.lista[3];
          return this.frutaAleatoria;
          break;
        case this.lista[4]:
          this.qtdLetras = this.lista[4].length;
          this.corFruta = "Amarelo/Verde";
          this.primaryLetter = arrResposta[0];
          this.frutaAleatoria = this.lista[4];
          return this.frutaAleatoria;
          break;
      }
    },
  },
  methods: {
    analisarResposta(event) {
      //retornando as variáves ao seu estado padrão
      // para as próximas chamadas da função
      this.respostaOculta = true;
      this.respostaVisivel = false;
      this.erroOculto = true;
      this.erroVisivel = false;
      
      // O nome que o usuário informou no input
      // será armazenado em respostaUser
      this.respostaUser = event.target.value;
      this.respostaUser = this.respostaUser.toUpperCase();
      if (this.respostaUser == this.frutaAleatoria) {
        this.respostaOculta = false;
        this.respostaVisivel = true;
        
      } else {
        this.erroOculto = false;
        this.erroVisivel = true;
      }
    },
    refresh() {
      document.location.reload(true);
    },
  },
});