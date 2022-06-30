Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        },
        removeGoal(goal) {
            this.goals.splice(this.goals.indexOf(goal), 1);
        },
    }
}).mount('#app');
