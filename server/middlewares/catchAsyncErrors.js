export const catchAsyncErrors=(midware)=>{
    return (req,res,next)=>{
        Promise.resolve(midware(req,res,next)).catch(next);
    }
}