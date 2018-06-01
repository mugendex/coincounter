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



// コインカウンターを追加する
function createCC(parentId){
    //まだ存在しない場合
    if(document.getElementById(`${parentId}_CC`) == null){
        var parent = document.getElementById(parentId);

                // 本体
                var Pn = document.createElement("div");
                Pn.classList.add(`CCWrapper`);
                Pn.id = `${parentId}_CC`
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
    

    /*if(parentId == "P1" && document.getElementById("P1_CC") == null){

        // 本体
        var P1CC = document.createElement("div");
        P1CC.setAttribute("class","CCWrapper P1_CC");
        parent.appendChild(P1CC);

        // 値表示部
        var counter = document.createElement("div");
        counter.classList.add = "P1_CC";
        counter.id = "P1CC_out";
        counter.textContent = "0";

        var P1CCFunc = new CoinCounter("P1CC_out");

        // +ボタン
        var plusButton = document.createElement("button");
        plusButton.textContent = "+";
        plusButton.onclick = P1CCFunc.increment;

        // -ボタン
        var minusButton = document.createElement("button");
        minusButton.textContent = "-";
        minusButton.setAttribute("onclick","P1CCFunc.decrement()");

        P1CC.appendChild(counter);
        P1CC.appendChild(plusButton);
        P1CC.appendChild(minusButton);

        
    }

    if(parentId == "P2" && document.getElementById("P2_CC") == null){
         var P2CCfunc = new CoinCounter("P2CC_out");

         // 本体
         var P2CC = document.createElement("div");
         P2CC.setAttribute("class","CCWrapper P2_CC");
         parent.appendChild(P2CC);

         // 値表示部
         var counter = document.createElement("div");
         counter.setAttribute("class","Coin_Counter");
         counter.setAttribute("id","P2CC_out");
         counter.textContent = "0";
 
         // +ボタン
         var plusButton = document.createElement("button");
         plusButton.setAttribute("onclick","P2CCfunc.increment()");
 
         // -ボタン
         var minusButton = document.createElement("button");
         minusButton.setAttribute("onclick","P2CCfunc.decrement()");

         P2CC.appendChild(counter,plusButton,minusButton);
    }*/
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



