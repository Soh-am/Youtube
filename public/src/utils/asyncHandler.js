const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));  
    }
}


export {asyncHandler}




//steps
//const asyncHandler = () => {}
//const asyncHandler = () =>  () => {}
//const asyncHandler = (func) => async () => {}


/*const asyncHandler = (fn) => async(req, res, next) => {
    try{
        await fn (req, res, next)
    } catch(error) {
        res.status(err.code || 500).json({
            success: false
            message: err.message
        }) 
    }
}  */ //^^^ explaine steps are above //For handling the errors in express