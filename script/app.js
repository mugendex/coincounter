/**************************************************
        コインカウンター
***************************************************/
function CoinCounter(out){
    // いじるタグ
    this.out = document.getElementById(out);

    // 値をインクリメントする
    this.increment = function(){
        if(this.out.textContent < 5){
            this.out.textContent++;
        }
    }

    // 値をデクリメントする
    this.decrement = function(){
        if(this.out.textContent > 0){
            this.out.textContent--;
        }
    }
}

function increment(out){
    document.getElementById(out).textContent++;
}

function decrement(out){
    document.getElementById(out).textContent--;
}



// コインカウンターを追加するメソッド
function CreateCC(parentId){
    //まだ存在しない場合
    if(document.getElementById(`${parentId}_CC`) == null){
        var parent = document.getElementById(parentId);

        // 本体
        var CCWrapper = document.createElement("div");
        CCWrapper.classList.add(`CCWrapper`,`${parentId}`);
        CCWrapper.id = `${parentId}_CC`;
        parent.appendChild(CCWrapper);
        
        // 値表示部
        var counter = document.createElement("div");
        counter.classList.add(`${parentId}_CC`);
        counter.id = `${parentId}CC_out`;
        counter.textContent = "0";
                
        
        // +ボタン
        var plusButton = document.createElement("button");
            plusButton.textContent = "＋";
            plusButton.onclick = function(){
            increment(`${parentId}CC_out`);
        };
    
        // -ボタン
        var minusButton = document.createElement("button");
        minusButton.textContent = "－";
        minusButton.onclick = function(){
            decrement(`${parentId}CC_out`);
        };

        // 削除ボタン
        var removeButton = document.createElement("Button");
        removeButton.textContent = "x";
        removeButton.onclick = function(){
            minusButton.remove();
            plusButton.remove();
            counter.remove();
            CCWrapper.remove();
            this.remove();
        }
                
        //下につける
        CCWrapper.appendChild(counter);
        CCWrapper.appendChild(plusButton);
        CCWrapper.appendChild(minusButton);
        CCWrapper.appendChild(removeButton);
    }
}

/**************************************************
        ioカウンター
***************************************************/
function Createio(parentId) {
    var parent = document.getElementById(parentId);

    //本体
    var ioWrapepr = document.createElement("div");
    ioWrapepr.classList.add("ioWrapper");


    
    //ボタン
    var io = document.createElement("input");
    io.type = "checkbox";
    io.classList.add("ioCWrapper",`${parentId}`);

    //小要素を親要素に追加
    parent.appendChild(io);
}
 
/**************************************************
        ダイス 
***************************************************/
//diceMax面のダイスを振る
var PlayDice = function(diceMax){ 
    return Math.floor(Math.random() * diceMax + 1);
}

var DiceEx = function(diceCount,diceMax){
    var diceArrey = [];

    count = 0;
    while(count < diceCount){
        diceArrey.push(PlayDice(diceMax));
        count++
    }

    var message = diceCount + "d" + diceMax + ":" + sum(diceArrey);
    console.log(message);

    return diceArrey;
}

var sum = function(arr){
    var sum = 0;
    count = 0;
    while(count < arr.length){
        sum += arr[count];
        count++;
    }
    return sum;
}

generatePassword = function(){
    var password = "";
    var passwordLength = 8;
    var word = "0123456789abcdefghijklmnopqrstuwxyz";
    
    for(var count = 0; count < passwordLength; count++){
        password += word.substr(PlayDice(word.length),1);
    }
    return password;
}



