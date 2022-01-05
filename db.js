let mongoose =require ('mongoose')
const mongooseOptions= {
    useNewUrlParser: true,
    useUnifiedTopology:true,
};

mongoose.connect('mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true',mongooseOptions).then(()=>{
    console.log("Connected to mongoDB")
})
.catch(err=>{
    console.log('Error to connect to mongoDB',err)
})