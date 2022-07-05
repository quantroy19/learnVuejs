const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue',
            linkVue: 'fb.com',
            content: 'Learn Vue',
        };
    },
    methods: {
        outputGoal() {
            let randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.content = 'Learn Vue';
            } else {
                return this.content = 'Learn PHP';
            }
        }
    }
});
app.mount('#user-goal');