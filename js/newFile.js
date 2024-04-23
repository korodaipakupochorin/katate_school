$(function(){
  $('button').on('click',function(){
    //クリックしたボタンの親要素にクラスを付与
    const target = $(this).closest('.container');
    target.toggleClass('active');
    //クラスの有無で条件分岐
    if(target.hasClass('active')){
      //スクロール領域も含めた高さを取得・付与する
      const height = target.get(0).scrollHeight;
      target.css('height',height);
      //テキストを変更する
      $(this).text('閉じる')
    }else{
      //高さを戻す
      target.css('height','');
      //テキストを戻す
      $(this).text('もっと見る');
    }
  });
});