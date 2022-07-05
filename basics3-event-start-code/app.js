const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            num: 0,
        };
    },
    methods: {
        add() {
            this.counter += Number(this.num);
        },
        reduce() {
            this.counter -= Number(this.num);
        },
        setNum(ev) {
            this.num = ev.target.value;
        }
    }
});

app.mount('#events');
