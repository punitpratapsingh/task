 const successRequest=(res,data)=>{
    return res.status(200).json({
        code:0,
        message:"Success",
        records:data
    });
}
module.exports=successRequest