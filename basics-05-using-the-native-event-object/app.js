const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      // fullname: '',
      name: '',
      lastname: '',
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
      // this.lastname = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
      this.lastname = '';
    }
  },
  computed: {
    // fullname() {
    // console.log('running...');
    // if (this.name !== "" && this.lastname !== "") {
    //   return this.name + " " + this.lastname;
    // };
    // if (this.name !== "") {
    //   return this.name;
    // }
  },
  watch: {
    name(value) {
      console.log(value);
      if (value !== '') {
        this.fullname = value;
      }
    },
    lastname(value) {
      if (value !== "") {
        this.fullname = this.name + " " + value;
      }
    },
  }
});

app.mount('#events');
