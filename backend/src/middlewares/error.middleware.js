const errorMiddleware = (
  err,
  req,
  res,
  next
) => {

  console.error("==============");
  console.error(err);
  console.error(err.stack);
  console.error("==============");

  return res.status(
    err.statusCode || 500
  ).json({
    success: false,
    message: err.message,
    errors: err.errors || []
  });
};

export default errorMiddleware;