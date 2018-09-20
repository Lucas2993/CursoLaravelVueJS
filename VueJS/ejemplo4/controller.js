var app = new Vue({
  el: '#app',
  data: {
  	visible: true, 
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ],
    tasks: [
      {
          title: 'Aprender Vue.js',
          pending: false
      },
      { 
          title: 'Inscribirse en Styde',
          pending: true
      }
    ]
  }
})