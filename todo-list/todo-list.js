var app = new Vue({
    el: '#app',
    data: {
        title : 'TODO LIST',
        todos : [],
        newTodo: '',
        showTodo: true,
        showDoing: false,
        showDone: false,
        navLinkClass:'nav-link'
    },
    methods: {
        test1: function () {
            this.showTodo= true;
            this.showDoing= false;
            this.showDone= false;
        },
        test2: function () {
            this.showTodo= false;
            this.showDoing= true;
            this.showDone= false;
        },
        test3: function () {
            this.showTodo= false;
            this.showDoing= false;
            this.showDone= true;
        }
    }
});