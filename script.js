
var wepons=["ROCK","PAPER","SCISSOR"];
var uc;
playerScore=0;
    sysScore=0;

function SystemChoice()
{

    var sysIndex= (Math.floor((Math.random())*10))%wepons.length;
    return wepons[sysIndex];
}

function humanChoice(hc){
    // alert(hc.toUpperCase());
    // console.log(hc);
uc=hc.toUpperCase();
}
function hideScoreCard(flag){
    if(flag==5){
    document.getElementById('usd').style.display="none";
            document.getElementById('ssd').style.display="none";}else{
                document.getElementById('usd').style.display="block";
                document.getElementById('ssd').style.display="block";   
            }

}
function hideResult(status){
    if(status!=5)
    document.getElementById('resdiv').style.display="none";
    else
    document.getElementById('resdiv').style.display="block"



}
function game(a,b){
    
    if(a==b)
    {
        // alert("hii");
        console.log("game tied");
        // document.getElementById('ss').innerText="clash";
        // document.getElementById('us').innerText="clash";


           }
    else{
        // alert("hello");
        if(a=="ROCK"){
            
            if(b=="PAPER"){
                sysScore++;
                console.log("yours"+playerScore+"system"+sysScore)
                document.getElementById('ss').innerText=sysScore;
                hideScoreCard(sysScore)
                hideResult(sysScore)
            }
            
            else{playerScore++;
                console.log("yours"+playerScore+"system"+sysScore)
                document.getElementById('us').innerText=playerScore;
                hideScoreCard(playerScore);
                hideResult(playerScore);
            }
            

        }
        else{
            if(a=="PAPER"){
                if(b=="SCISSOR")
                {
                    sysScore++;
                    console.log("yours"+playerScore+"system"+sysScore)
                    document.getElementById('ss').innerText=sysScore;
                    hideScoreCard(sysScore)
                    hideResult(sysScore)
                }
                // document.getElementById('us').innerText=sysScore++;

                else{playerScore++;
                    console.log("yours"+playerScore+"system"+sysScore)
                    document.getElementById('us').innerText=playerScore;
                hideScoreCard(playerScore);
                hideResult(playerScore)
            }
                // document.getElementById('ss').innerText=playerScore++;
            }
            else{
                if(b=="ROCK"){sysScore++;
                    console.log("yours"+playerScore+"system"+sysScore)
                    document.getElementById('ss').innerText=sysScore;
                    hideScoreCard(sysScore);
                    hideResult(sysScore)
                
                }

                // document.getElementById('us').innerText=sysScore++;

                else{playerScore++;
                    console.log("yours"+playerScore+"system"+sysScore)
                    document.getElementById('us').innerText=playerScore;
                hideScoreCard(playerScore);
                }
                // document.getElementById('ss').innerText=playerScore++;
            }
        }
    }
    if(sysScore==5||playerScore==5){
        if(sysScore==5){
            document.getElementById('ss').innerText=sysScore+"you lost ..";
            document.getElementById('resdiv').innerText="you lost ..";
            hideScoreCard(sysScore);

            // document.getElementById('resdiv').style.display="block"
            hideResult(sysScore);
            
            playerScore=0;
    sysScore=0;

        }
        else{
            document.getElementById('ss').innerText=playerScore;
            document.getElementById('resdiv').style.display="block";
            hideScoreCard(playerScore);

 document.getElementById('resdiv').innerText="you won ..";
 hideResult(playerScore);
            playerScore=0;
           sysScore=0;

        }
        
        document.createElement('div').innerHTML="wanna play again?"
    }
    // if(){

    // }

}












