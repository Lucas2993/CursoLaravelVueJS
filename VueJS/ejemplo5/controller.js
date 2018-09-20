var app = new Vue({
  el: '#app',
  data: {
    message: 'Bienvenidos!',
    new_task: '',
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
  },
	methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    createTask: function () {
	    this.tasks.push({
        title: this.new_task, 
        pending: true
	    });
		}
  }
})