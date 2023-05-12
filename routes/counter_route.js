const router = require('express').Router();
const counter = require('./counter');

router.use((req, res, next) => {
        if(req.query.string){
            const string = req.query.string
    
            let coutns = {};
            coutns = counter(string);
        
            
            res.send(coutns);
        }else{
            const err = new Error ('Please provide a string')
            err.status = 304
            next(err);
        }
        
    }
)


module.exports = router;