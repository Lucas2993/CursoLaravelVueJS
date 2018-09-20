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
    createTask: function (event) {
    	// event.preventDefault();
    	if(this.new_task == ''){
    		return;
    	}
	    this.tasks.push({
        title: this.new_task, 
        pending: true
	    });
	    this.new_task = '';
		}
  }
})