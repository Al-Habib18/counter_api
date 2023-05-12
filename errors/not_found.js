const not_found = (_req ,_res, next) =>{
    const err = new Error ("upps!!!, not_found...404")
    err.status = 404;
    next(err);
}

module.exports = not_found;