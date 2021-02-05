new Vue({
  el: "#app",
  data: {
    currentTodo: "", //todo inserido pelo usuário
    todos: [
      { text: "Estudar Vue.js", done: false },
      { text: "Estudar Bootstrap", done: false },
      { text: "Ler documentações ", done: true },
    ],
  },
  computed: {
    filteredTodos() {
      return this.todos.filter(
        todo => todo.text.toLowerCase().match(this.currentTodo.toLowerCase())
      )
    }
  },
  methods: {
    addTodo() {
      if (!this.currentTodo.trim() || this.checkIfTodoExists()) return
      this.todos.push({
        text: this.currentTodo,
        //os checkboxs inicializam sendo false, 
        // pois ainda não foram finalizados
        done: false
      });
      //apagamos o valor que estava no atributo após adicionado na lista
      this.currentTodo = ""
      this.sortTodos()
    },
    toggleTodo(todo) {
      todo.done = !todo.done
      this.sortTodos()
    },
    deleteTodo(todo) {
      this.todos = this.todos.filter(
        el => el.text !== todo.text);
    },
    sortTodos() {
      //sort() vai ordernar os elementos do array todos
      //(a,b) são os elementos de comparação
      //a.done - b.done vai order os checkboxs, sendo: 
      //(false - não finalizados, no início da lista)
      //(true - finalizados, no fim da lista)
      this.todos.sort((a, b) => a.done - b.done)
    },
    checkIfTodoExists() {
      //some() retorna em booleano se existe no array todos algum
      // to-do com texto igual ao contido no atributo currentTodo
      //trim() removerá os espaços em branco no início e fim dos textos
      return this.todos.some((todo) => todo.text == this.currentTodo.trim())
    }
  }
})