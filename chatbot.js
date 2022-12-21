/*let string=document[0].forms[0];
console.log(string);*/
let msg=document.getElementById('msg');
let input_text=document.getElementById('input_text');
function a() {
    // ここで以下のブラウザ標準の動きをSTOPする
    event.preventDefault();
    // inputタグのvalueを取得する
    const value = event.target.text.value;
    console.log(value);
    alert("Hello world!!");
  }

function OnSubmit(){
   //console.log("a");
    let sentText=document.forms['form1'].elements['input_text'].value;
   // Analysis(sentText);
    ResponseTxt(sentText);
 //   console.log(document.form1.text.value);
}
function RequestCsv(dataFiles){
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", dataFiles,false); // アクセスするファイルを指定        
    req.send(null); // HTTPリクエストの発行
    req.onload = function(){
        return req.responseText;    
        //console.log("b");
        //return 'a';
    }
    //console.log("a");
}
//CSVファイルを読み込む関数getCSV()の定義
function Analysis(sentText){
    let dataFiles=['/datas/minusSmallWord.csv','/datas/minusWord.csv','/datas/plusSmallWord.csv'
    ,'/datas/plusBigWord.csv','/datas/randomDialogue.csv'];
    for(let i=0;i<dataFiles.length;i++){
//        let tmp=RequestCsv(dataFiles[i]).split('\r');
//            console.log(RequestCsv(dataFiles[i]));
            console.log(RequestCsv(dataFiles[i]));
        //    console.log(tmp);
       // var tmp = req.resonseText.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
    /*    for(var j=0;j<tmp.length;j++){
                //リターンが含まれている場合に除く
            if(tmp[j].indexOf('\r')){
                tmp[j]=tmp[j].replace('\r','');
            }
            let regex=new RegExp(tmp[j]);
            if(regex.test(sentText)){
                switch(i){
                    case 0:
                        let randomSamllSadTxt=['え・・・'];
                        return randomSamllSadTxt[Math.floor(Math.random()*randomSamllSadTxt.length)];
                    case 1:
                        let randomBigSadTxt=['怒りますよ!','最低!','き・・・聞こえない～・・・'];
                        return randomBigSadTxt[Math.floor(Math.random()*randomBigSadTxt.length)];
                        break;
                    case 2:
                        let randomSmallJoyTxt=['ありがとうございます！'];
                        return randomSmallJoyTxt[Math.floor(Math.random()*randomSmallJoyTxt.length)];
                    case 3:
                        let randomBigJoyTxt=['フフッ'];
                        return randomBigJoyTxt[Math.floor(Math.random()*randomBigJoyTxt.length)];
                    default:
                        let randomTxt=['わーい'];
                        return randomTxt[Math.floor(Math.random()*randomTxt.length)];
                }
            }
        }*/
    }
 //   var tmp = req.resonseText.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    /*for(var i=0;i<tmp.length;i++){
        //リターンが含まれている場合に除く
        if(tmp[i].indexOf('\r')){
            tmp[i]=tmp[i].replace('\r','');
        }
        let regex=new RegExp(tmp[i]);
        if(regex.test(sentText)){
            let randomSadTxt=['怒りますよ!','最低!','き・・・聞こえない～・・・']
            ResponseTxt(randomSadTxt[Math.floor(Math.random()*randomSadTxt.length)]);
        }
    }*/
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

function BotResponse(sentText){
    /*var result = []; // 最終的な二次元配列を入れるための配列
    var tmp = req.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;i++){
        //リターンが含まれている場合に除く
        if(tmp[i].indexOf('\r')){
            tmp[i]=tmp[i].replace('\r','');
        }
        let regex=new RegExp(tmp[i]);
        if(regex.test(sentText)){
            let randomSadTxt=['怒りますよ!','最低!','き・・・聞こえない～・・・']
            ResponseTxt(randomSadTxt[Math.floor(Math.random()*randomSadTxt.length)]);
        }*/
    
}

function ResponseTxt(sentText){
    msg.innerText=Analysis(sentText);

    document.getElementById('input_text').value='';
    if(sentText=="こんにちは"){
    }
}