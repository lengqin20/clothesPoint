var tplIndex = require('../tpl/index.string');
SPA.defineView('index', {
  html: tplIndex,

  plugins: ['delegated'],

  init: {
  mySwiper: null
},

  modules: [{
    name: 'indexContent',
    container: '.totalBody',
    views: ['firstPage', 'sort', 'cart', 'my'],
    defaultTag: 'firstPage'
  }],

  bindActions: {
    'tap.switch': function (el, data) {
      this.modules.indexContent.launch(data.tag);
      //  console.log(el);
       $(el.el).addClass("active").siblings().removeClass("active");
    }
  },

});
