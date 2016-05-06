var tplFirstPage = require('../tpl/firstPage.string');

SPA.defineView('firstPage', {
  html: tplFirstPage,

  plugins:[{
    name:"avalon",
    options:function(vm){
      vm.datalist=[];
    }
  }],

  init:{
    formatData:function(arr){
      var newArr=[];
      var counter=0;
      for(var i=0;i<Math.ceil(arr.length/2);i++){
        newArr[i]=[];
        for(var j=0;j<2;j++){
          newArr[i][j]=arr[counter++];
        }
      }
      return newArr;
    }
  },

  ready: function () {
    setTimeout(function(){
      var myScroll = new IScroll('#index-scroll');
      myScroll.refresh();
    },200);
  },
  bindEvents: {
    'beforeShow': function() {
      this.mySwiper = new Swiper('#index-swiper', {
        autoplay : 3000,
        autoplayDisableOnInteraction : false,
        loop:true
    });
    var that=this;
    var vm=that.getVM();
    $.ajax({
      url:"/clothesPoint/api/dataList.do",
      type:"get",
      success:function(res){
        console.log(that.formatData(res.data))
         vm.datalist=that.formatData(res.data);
        // console.log(res)
      }
    });
  }
}
});
