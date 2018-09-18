var app = new Vue({
  el: '#app',
  data: {
    message: 'Bienvenidos!'
  },
	methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})