$(function() {
	//スクロールされると実行
	$(window).on('load scroll', function(){	
    //console.log("スクロール確認");

    //ヘッダーの高さ分スクロールするとクラスを追加
		if ($(window).scrollTop() > 50) {
      $("h1").addClass('fixed');
      $("")
		} else {
			//fixedクラスを削除
			$("h1").removeClass('fixed');
		}	
  });
});

// $(function(){
//   var pagetop = $('#page_top');
//   // スクロールしたらボタン表示
//   $(window).scroll(function () {
//      if ($(this).scrollTop() > 100) {
//           //pagetop.fadeIn();
//      } 
//   });
//   pagetop.click(function () {
//      $('body, html').animate({ scrollTop: 0 }, 700);
//   });
// });

