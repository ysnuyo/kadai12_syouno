window.onload = function(){

  var long = 500;//譜面の長さ
  var val = new Array(long);
  var key = new Array(long);
  var keynum = 0;
  var end;
  var start;

  var count=0;

  $('#startbutton').click(function(){
    $("#startbutton").remove();
    for (var i = 0; i < long; i++) {//譜面作成:1=ぐー,2=ちょき,3=ぱー
      val[i] = Math.floor( Math.random()*3 )+1;
    }

    for (var i = 0; i < long; i++) {//譜面表示
      if (val[i]==1){
        $("#score").append("<p class=notes>"+(val[i])+"ぐー</p>");
      }else if(val[i]==2){
        $("#score").append("<p class=notes>"+(val[i])+"ちょき</p>");
      }else if(val[i]==3){
        $("#score").append("<p class=notes>"+(val[i])+"ぱー</p>");
      }
    }
    start = true;
    timerfnc();
  });

function timerfnc(){
  if(start　==true) {
  console.log(start);
    var timer = setInterval(function(){
      if(end){
        clearInterval(timer);
      }
      count++;
      console.log(count);
      $("#time").html("<h3>残り時間は"+ (61-count) +"</h3>");
        if(count > 60){　
          clearInterval(timer);
          end = true;
        }
      }, 1000);
  }}





  $(window).on("keydown",function(e){
    if (end == true || keynum == long) {
      return true;
    }
    key[keynum] = e.keyCode;
    console.log( key[keynum]-48 + ":" + val[keynum]);
    if ((val[keynum]==1 && key[keynum]-48==2)||(val[keynum]==2 && key[keynum]-48==3)||(val[keynum]==3 && key[keynum]-48==1)) {//じゃんけん負け
      //alert(key[keynum] + "wrong!!"+ keynum + "val:" + val[keynum]);
      end = true;
      $("#result").html("<h3>ポイントは"+keynum+"で負けました</h3>");
      return true;
    }else if ((val[keynum]==1 && key[keynum]-48==3)||(val[keynum]==2 && key[keynum]-48==1)||(val[keynum]==3 && key[keynum]-48==2)) {//じゃんけん勝ち
      //alert(key[keynum] + "wrong!!"+ keynum + "val:" + val[keynum]);
      end = true;
      keynum += 1;
      $("#result").html("<h3>ポイントは"+keynum+"で勝ちました</h3>");
      return true;
    }else if(val[keynum] == key[keynum]-48){//じゃんけんあいこ
      keynum += 1;
      $("#result").html("<h3>ポイント:"+keynum+"</h3>");
      $(".notes:first").remove();
      if (keynum == long) {
        $("#result").html("<h3>ポイントは"+keynum+"で、フルコンボでした！</h3>");
        end = true;
      }
    }
  });



  $('.button').click(function(){
    var id = $(this).attr('id');
    jankenbutton( id );
  });

  function jankenbutton( buttonval ) {
    //  alert( buttonval );
    key[keynum] = parseInt(buttonval, 10)+48;
    //  alert(key[keynum]);
    if ((val[keynum]==1 && key[keynum]-48==2)||(val[keynum]==2 && key[keynum]-48==3)||(val[keynum]==3 && key[keynum]-48==1)) {//じゃんけん負け
      //alert(key[keynum] + "wrong!!"+ keynum + "val:" + val[keynum]);
      end = true;
      $("#result").html("<h3>ポイントは"+keynum+"で負けました</h3>");
      return true;
    }else if ((val[keynum]==1 && key[keynum]-48==3)||(val[keynum]==2 && key[keynum]-48==1)||(val[keynum]==3 && key[keynum]-48==2)) {//じゃんけん勝ち
      //alert(key[keynum] + "wrong!!"+ keynum + "val:" + val[keynum]);
      end = true;
      keynum += 1;
      $("#result").html("<h3>ポイントは"+keynum+"で勝ちました</h3>");
      return true;
    }else if(val[keynum] == key[keynum]-48){//じゃんけんあいこ
      keynum += 1;
      $("#result").html("<h3>ポイント:"+keynum+"</h3>");
      $(".notes:first").remove();
      if (keynum == long) {
        $("#result").html("<h3>ポイントは"+keynum+"で、フルコンボでした！</h3>");
        end = true;
      }
    }
  }


}
