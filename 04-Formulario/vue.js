new Vue({
    el: "#app",
    data: {
        name: null,
        situationSelected: null,
        areaSelected: null,
        width: `${33.33}%`,
        progresso: 33.33,
        buttonStart: true,
        buttonBack: false,
        buttonNext: false,
        count: -1,
        btNextActive: false,
        classDesabled: true,
        position: 1,
        pergunta: '',
        questions: [
            'Como podemos te chamar?',
            'Em qual das áreas abaixo você se identifica?',
            'Qual é a sua formação?',
            'FIM! Essa linha não aparecerá como pergunta.'
        ],
        areas: [
            'FrontEnd',
            'BackEnd',
            'FullStack',
            'Mobile',
            'UI/UX',
            'Outro'
        ],
        situacao: [
            'Ensino médio completo',
            'Ensino superior incompleto',
            'Ensino superior completo',
        ]
    },
    methods: {
        startQuestion() {
            this.buttonStart = false
            this.count++
        },
        nextQuestion() {
            this.count++
            this.buttonBack = true
            this.btNextActive = true
            this.classDesabled = false
            this.barraProgresso('+33.33')
            return this.actionButton('next')
        },
        backQuestion() {
            this.count--
            this.barraProgresso('-33.33')
            return this.actionButton('back')
        },
        actionButton(value) {
            if (value === 'next') {
                this.position++
            }
            else if (value === 'back') {
                this.position--
                if (this.position == 1) {
                    this.buttonBack = false
                    this.btNextActive = false
                    this.classDesabled = true
                }
            }
        },
        barraProgresso(valor) {
            if (valor === '+33.33') {
                this.progresso += 33.33
            }
            else if (valor === '-33.33') {
                this.progresso -= 33.33
            }
            this.width = `${this.progresso}%`
        },

        /* Validar formulário - Só permite que o usário 
        prossiga para a próxima pergunta caso seja respondido
        a pergunta */
        checkForm(e) {
            switch (this.position) {
                case 1:
                    if (this.name == null) {
                        e.preventDefault()
                        alert('O campo nome é obrigatório!')
                    }
                    else {
                        return this.nextQuestion()
                    }
                    break
                case 2:
                    if (this.areaSelected == null) {
                        e.preventDefault()
                        alert('Selecione uma opção para prosseguir!')
                    }
                    else {
                        return this.nextQuestion()
                    }
                    break
                case 3:
                    if (this.situationSelected == null) {
                        e.preventDefault()
                        alert('Selecione uma opção para finalizar!')
                    }
                    else {
                        return this.nextQuestion()
                    }
            }
        }
    },
    computed: {
        /* Retorna uma pergunta da lista (de forma ordenada) */
        resultQuestion() {
            this.pergunta = this.questions[this.count]
            return this.questions[this.count]
        },
    }
})