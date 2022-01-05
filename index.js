let express= require("express");
let app=express();
require('./db')
let Record= require('./modals/records')
app.use(express.json())
let successRequest= require('./utils')

app.get('/demo',(req,res)=>{
    res.send("demo chl raha hai")
})

app.post('/assignment',async(req,res)=>{
    try{
    const {startDate,endDate,maxCount,minCount}=req.body
    if(minCount && maxCount && endDate && startDate){
    console.log("start",startDate,"enddate",endDate,"max",maxCount,"min",minCount)
    let records= await Record.aggregate([
        {
        $project:{
            _id:0,
            key:1,
            createdAt:1,
            totalCounts:
                {$sum: "$counts"}
        }
    },{$match:
       {createdAt:{$gte:new Date(startDate),$lt:new Date(endDate)}}
    },]).sort({createdAt: -1})
    console.log("rec---",records.length)
    let arr=[]
    for(let i=0; i<records.length;i++){
    if(records[i].totalCounts>minCount && records[i].totalCounts<maxCount){
        console.log("rec---",records[i])
        arr.push(records[i])
        
    }
}
successRequest(res,arr)
}
else{
    res.send("Please provide all the details")
}
}
catch(err){
res.send("Something Went Wrong")
}
})


app.listen('3000',(()=>{
    console.log("Listening at port 3000")
}))