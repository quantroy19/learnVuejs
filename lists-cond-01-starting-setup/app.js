const app = Vue.createApp({
  data() {
    return {
      goal: '',
      goals: [],
    };
  },

  _methods: {
    pushGoal() {
      this.goals.push(this.goal);
      this.goal = null;
    },
    remove(index) {
      this.goals = this.goals.filter((value, goalindex) => {
        return index !== goalindex;
      });
    },
  },
  get methods() {
    return this._methods;
  },
  set methods(value) {
    this._methods = value;
  },
});

app.mount('#user-goals');
