var tplCart = require('../tpl/cart.string');

SPA.defineView('cart', {
  html: tplCart,

  ready: function () {
      var myScroll = new IScroll('#cartScroll',{scrollX:true,scrollY:false});
      // myScroll.refresh();
    // document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
  },
  bindActions:{
    'toIndex':function(){
      this.open("index.string")
    }
  }
});
