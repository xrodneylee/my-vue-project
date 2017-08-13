var app = new Vue({
    el: '#app',
    data: {
        title: 'TODO LIST',
        todos: [],
        doings: [],
        dones: [],
        newTodo: '',
        showTodo: true,
        showDoing: false,
        showDone: false,
        navLinkClass:'nav-link',
        numOfTodo: 0,
        numOfDoing: 0,
        numOfDone: 0
    },
    computed:{

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
        },
        addTask: function () {
            if(this.newTodo === '') {
                alert("請輸入任務")
            }else {
                this.todos.push(this.newTodo);
                this.newTodo = '';
                this.numOfTodo = this.todos.length;
            }
        },
        deleteTodoTask: function(index) {
            this.todos.splice(index, 1);
            this.numOfTodo = this.todos.length;
        },
        deleteDoingTask: function(index) {
            this.doings.splice(index, 1);
            this.numOfDoing = this.doings.length;
        },
        moveDoing: function(task, index) {
            this.doings.push(task);
            this.todos.splice(index, 1);
            this.numOfTodo = this.todos.length;
            this.numOfDoing = this.doings.length;
        },
        moveDone: function(task, index) {
            this.dones.push(task);
            this.doings.splice(index, 1);
            this.numOfDoing = this.doings.length;
            this.numOfDone = this.dones.length;
        }
    }
});