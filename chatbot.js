/*let string=document[0].forms[0];
console.log(string);*/
let msg=document.getElementById('msg');
function a() {
    // ここで以下のブラウザ標準の動きをSTOPする
    event.preventDefault();
  
    // inputタグのvalueを取得する
    const value = event.target.text.value;
    console.log(value);
  
    alert("Hello world!!");
  }

function OnSubmit(){
    getCSV();
   //console.log("a");
    let sentText=document.forms['form1'].elements['input_text'].value;
    Response(sentText)
 //   console.log(document.form1.text.value);
}
//CSVファイルを読み込む関数getCSV()の定義
function getCSV(){
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "/datas/minusword.csv", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行
    
	
    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function(){
	    Analysis(req.responseText); // 渡されるのは読み込んだCSVデータ
    }
}

// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
    var result = []; // 最終的な二次元配列を入れるための配列
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
 
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;++i){
//        result[i] = tmp[i].split('\n');
      //  console.log(result[i]);
      console.log(tmp[i]);
    }
 
}

function Analysis(sentText){
    var result = []; // 最終的な二次元配列を入れるための配列
    var tmp = sentText.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
    let regex=new RegExp(sentText);
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.
        length;++i){
//        result[i] = tmp[i].split('\n');
      //  console.log(result[i]);
//      let re=new RegExp(tmp[i],sentText)
      console.log(/エッチ/.test(tmp[i]));
    }

}
function Response(sentText){
    if(sentText=="こんにちは"){
        msg.innerText=sentText;
    }
}