function chkString(a : string){
    var keyWord : string = "Marvellous";
    if(a.includes(keyWord)){
        console.log("String contains Marvellous in it.")
    }
    else{
        console.log("Invalid string.")
    }

}
var sentence : string = "Pune Kothrud Marvellous Infosystems";
chkString(sentence);