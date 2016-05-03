var tplSort = require('../tpl/sort.string');

SPA.defineView('sort', {
  html: tplSort,
  bindEvents: {
    'beforeShow': function () {
    }
  },

  ready: function () {
    // setTimeout(function(){
    //   var myScroll = new IScroll('.sortScroll');
    //   myScroll.refresh();
    // },200)

  }
});
