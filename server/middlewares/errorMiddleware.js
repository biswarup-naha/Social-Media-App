export default function ErrorHandler(message, status) {
  const error = new Error();
  error.status = status;
  error.message = message;
  return error;
}

export const errorMiddleware = (err, req, res, next) => {
  err.status = err.message || 500;
  err.message = err.message || "Internal server error!";

  //if any of the new registration data value matches with already existing data value in db
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err=new ErrorHandler(message, 400);
  }
  
  //if jwt error
  if(err.name==="JsonWebTokenError"){
    const message="Token is invalid!";
    err = new ErrorHandler(message, 400);
  }

  //if jwt expired
  if(err.name==="TokenExpiredError"){
    const message="Token has expired!";
    err = new ErrorHandler(message, 400);
  }

  //cast error: invalid types in model
  if (err.name === "CastError") {
    const message = `Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  const errorMessage = err.errors
    ? Object.values(err.errors)
        .map((error) => error.message)
        .join(",")
    : err.message;

  return res.status(err.status).json({succes: false, message: err.message});
};
