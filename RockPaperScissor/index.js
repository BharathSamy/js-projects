let disp=confirm("Shall we play rock,paper or scissors");
if(disp){
    let playerchoice=prompt("PLease enter rock,paper or scissors");
    if(playerchoice){
        let player=playerchoice.trim().toLowerCase();
            if(player==="rock" || player==="paper" || player==="scissors")
            {
                let computerchoice=Math.floor(Math.random()*3+1);
                let computer=
                        computerchoice===1? "rock" : computerchoice===2 ? "paper" : "scissors";
                    
                let result=
                        player===computer ? "Tie game" :
                        player==="rock" && computer==="paper" ?
                         `player = ${player}\n computer = ${computer} \n computer wins` :
                        player==="paper" && computer==="scissors" ?
                         `player = ${player}\n computer = ${computer} \n computer wins` :
                        player==="scissors" && computer==="rock" ?
                         `player = ${player}\n computer = ${computer} \n computer wins` :
                         `player = ${player}\n computer = ${computer} \n player wins`;
                alert(result);
                let playAgain=confirm("Do you want to play again?");
                playAgain ? location.reload() : alert("Thanks for playing");
            }
            else{
                alert("please try to enter rock , paper or scissors otherwise it won't work");
            }
    }
    else{
        alert("Thanks for coming try to play next time");
    }
}
else{
    alert("Thanks for coming try to play next time");
}