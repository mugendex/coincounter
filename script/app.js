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
function createCC(parentId){
    //まだ存在しない場合
    if(document.getElementById(`${parentId}_CC`) == null){
        var parent = document.getElementById(parentId);

            // 本体
            var Pn = document.createElement("div");
            Pn.classList.add(`CCWrapper`);
            Pn.id = `${parentId}_CC`;
            parent.appendChild(Pn);
        
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
            }
                
                //下につける
            Pn.appendChild(counter);
            Pn.appendChild(plusButton);
            Pn.appendChild(minusButton);
    }
}

/**************************************************
        ioカウンター
***************************************************/
function Createtext_element() {
    var o = document.createElement("div");
    
    o.setAttribute("class", "io_Counter");
    document.getElementById("io_Counter_wrapper").appendChild(o);
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
    
    for(var count = 0; count < passwordLength
        ; count++){
        password += word.substr(PlayDice(word.length),1);
    }
    return password;
}



