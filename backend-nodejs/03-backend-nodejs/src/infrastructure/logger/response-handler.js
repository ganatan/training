const responseHandler = (req, res, next) => {
  if (res.headersSent) return next()
  const statusCode = res.locals.statusCode || 200
  const data = res.locals.data || null
  res.status(statusCode).json({
    success: true,
    data
  })
}

export default responseHandler



// const responseHandler = (err, req, res, next) => {
//   console.log('00000000002');
//   if (err) {
//     const { status = 500, message = 'Internal Server Error' } = err;
//     console.error(`[ERROR] ${status}: ${message}`);

//     return res.status(status).json({ message });
//   }

//   if (res.locals.data !== undefined) {
//     const statusCode = res.statusCode && res.statusCode >= 100 && res.statusCode < 600 ? res.statusCode : 200;

//     return res.status(statusCode).json(res.locals.data);
//   }

//   return next();
// };

// export default responseHandler;
