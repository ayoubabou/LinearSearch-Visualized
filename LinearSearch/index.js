const cnv = document.getElementById("cnv")
const ctx = cnv.getContext("2d")
let myArr = [12,78,45,63,23,54,7,88]

let message

async function linearSearch(arr,elm) {
    ctx.fillStyle = "red"
    for (let ind = 0; ind < arr.length; ind++) {
        ctx.fillRect(15*ind,0,10,myArr[ind])
        ctx.fillText(myArr[ind].toString(),15*ind,120)
    }
    for (let i = 0; i < arr.length; i++) {
        await new Promise(resolve=>setTimeout(resolve,1000))
        ctx.clearRect(0,0,cnv.width,cnv.height)
        ctx.fillStyle = "red"
        for (let ind = 0; ind < arr.length; ind++){
            ctx.fillRect(15*ind,0,10,myArr[ind])
            ctx.fillText(myArr[ind].toString(),15*ind,120)
        }
        ctx.fillStyle = "green"
        ctx.fillRect(15*i,0,10,myArr[i])
        ctx.fillText(myArr[i].toString(),15*i,120)
        if(arr[i]==elm){
            message = `Element ${elm} is found at index ${i}.`
            break
        }else if (i==(arr.length-1)){
            message = `${elm} is not found.`
        }
    }
    document.getElementById("msg").innerHTML = message
}
linearSearch(myArr,89)


