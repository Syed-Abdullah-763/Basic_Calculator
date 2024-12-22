function getNumber(num){
    let output=document.getElementById('result')
    output.value += num
}
function clearBtn(){
    let output=document.getElementById('result')
    output.value = ' '
}
function getResult(){
    let output=document.getElementById('result')
    output.value=eval(output.value)
}