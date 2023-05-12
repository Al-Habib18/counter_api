const error_handler = (err, req ,res , next) => { 
    if(err.status){
        res.status(err.status).json({
            message: err.message
        })
    }else{
        req.status(500).json({"message": "Cool!!!,,Server Error"});
    }
}

module.exports = error_handler;