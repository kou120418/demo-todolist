var vm = new Vue({
  el: '#app',
  data: {
    input: '',
    default_data: [{
      name: '透視研究',
      check: 'not-checked'
    }, {
      name: '構成研究',
      check: 'not-checked'
    }, {
      name: '色彩研究',
      check: 'not-checked'
    }]
  },
  methods: {
    add_items: function () {
      let input = $('.learnWhat');
      if (input.val() != '') {
        this.input = input.val();
        this.default_data.push({
          name: input.val(),
          check: 'not-checked'
        });
      }
      if (input.val() == '') {
        alert('又懶癌發作484，日課規劃起來！');
      }
      input.val('');
    },
    check: function (index) {
      if (this.default_data[index].check != 'not-checked') {
        this.default_data[index].check = 'not-checked';
      } else {
        this.default_data[index].check = 'is-checked';
      }
    },
    del: function (index) {
      this.default_data.splice(index, 1);
    }
  }
});