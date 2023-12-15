// const fs = require("fs");
// function callbackfn(err,data){
//     console.log(data);
// }
// fs.readFile("a.txt","utf-8",callbackfn);
const bodyParser = require('body-parser');
const express = require('express')


function Sum(counter){
    var sum=0;
    for(var i=0;i<counter+1;i++){
        sum=sum+i;
    }
    return sum;
}
function calculateMul(counter){
    var answer=1;
    for(var i=1;i<counter+1;i++){
        answer=answer*i;
    }
    return answer;
}
const app = express()
const port = 3000

function middleware1(req,res,next){
    console.log("from inside middleware "+req.headers.counter)
    next();
}
// app.use(middleware1)
app.use(bodyParser.json());


function handlerequest(req,res){
    console.log('hello mate')
    var counter=req.query.counter;
    if(counter>100000){
        res.status(411).send('you have sent a very big number')
    }
    console.log(req.body.counter)
    var answersum=Sum(counter);
    var answermul=calculateMul(counter);
    var answerobj={
        sum:answersum,
        mul: answermul
    }
    // var response='the sum is '+answer;
    res.send(answerobj)
}
function givePage(req,res){
    res.sendFile(__dirname+"/index.html")
}
app.get('/createuser',handlerequest);
app.get('/',givePage);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 

var calsum=Sum(5);
console.log(calsum);