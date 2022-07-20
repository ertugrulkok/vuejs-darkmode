const app = Vue.createApp({
  data() {
    return {
        darkmode: false
    };
  },
  methods: {},
  computed: {
    test() {
       return {active : this.darkmode}
    }
  }
});

app.mount('body')