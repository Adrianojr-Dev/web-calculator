
var res = window.document.getElementById("result")
function insert(num){
    res.innerHTML += num
}
function clearr(){
    res.innerHTML = ""
}
function calculate(){
    if(res.innerHTML){
        res.innerHTML = eval(res.innerHTML)
    }else{
        res.innerHTML = ""
    }
    
}
function decrease(){
    res.innerHTML = res.innerHTML.substring(0, res.innerHTML.length -1)
}
