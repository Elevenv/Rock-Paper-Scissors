function rpsGame(choice){
    // var a = ['rock','paper','scissors'] 
    var yourScore
    var botScore   
    var msg
    var humanChoice = choice.id
    var botChoiceStr
    var botChoice = Math.floor(Math.random()*3)
    if(botChoice == 0){
        botChoiceStr = "rock" 
    }
    else if(botChoice == 1){
        botChoiceStr = "paper"
    }
    else {
        botChoiceStr = "scissors"
    }
    // console.log(botChoiceStr,humanChoice)
    var result = Botchoicefun(humanChoice,botChoiceStr)
    // console.log(result)
    function Botchoicefun(humanChoice,botChoiceStr){
        var db = {
            'rock':{'scissors':'win','rock':'tie','paper':'lost'},
            'paper':{'rock':'win','paper':'tie','scissors':'lost'},
            'scissors':{'paper':'win','scissors':'tie','rock':'lost'}
        };
        yourScore = db[humanChoice][botChoiceStr]
        botScore = db[botChoiceStr][humanChoice]
        return [yourScore,botScore]
    }
    // msg = FinalMsg(result)
    if(yourScore=='lost'){
        msg = {'msg':"You Lost!",'BotChoice':botChoiceStr}
    }
    else if(yourScore == 'tie'){
        msg = {'msg':"You Tied!",'BotChoice':botChoiceStr}
    }
    else{
        msg = {'msg':"You Win!!",'BotChoice':botChoiceStr}
    }
    // console.log(result,msg,yourScore == 'lost',yourScore=='tie')
    // var fyc = document.createTextNode( 'Your Choice : ' + humanChoice.toUpperCase())
    // var yc = document.getElementById('yc')
    // yc.appendChild(fyc)

    // var fcc = document.createTextNode('Computers Choice : ' + msg.BotChoice.toUpperCase())
    // var cc = document.getElementById('cc')
    // cc.appendChild(fcc)
    document.getElementById('yc').innerHTML = "Your Choice : " + humanChoice.toUpperCase()
    document.getElementById('cc').innerHTML = "Computer's Choice : " + msg.BotChoice.toUpperCase()
    document.getElementById('fr').innerHTML = 'Result : ' + msg.msg

    // function FinalMsg(yourScore){
    //     if(yourScore === 'lost'){
    //         return {'msg':"You Lost!",'BotChoice':botChoiceStr}
    //     }
    //     else if(yourScore === 'tie'){
    //         return {'msg':"You Tied!",'BotChoice':botChoiceStr}
    //     }
    //     else{
    //         return {'msg':"You Win!!",'BotChoice':botChoiceStr}
    //     }
    // }
}