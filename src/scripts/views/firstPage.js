var tplFirstPage = require('../tpl/firstPage.string');

SPA.defineView('firstPage', {
  html: tplFirstPage,
  bindEvents: {
    'beforeShow': function () {
    }
  },
  ready: function () {
    setTimeout(function(){
      var myScroll = new IScroll('#index-scroll');
      myScroll.refresh();
    },200)

  },
  bindEvents: {
    'beforeShow': function() {
      this.mySwiper = new Swiper('#index-swiper', {
        autoplay : 3000,
        autoplayDisableOnInteraction : false,
        loop:true
    })
  }
}
});
