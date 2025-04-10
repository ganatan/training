const notFoundHandler = (req, res, next) => {
  if (res.locals.data === undefined) {
    // res.status(404).json({
    //   status: 'error',
    //   message: 'Resource not found',
    //   path: req.originalUrl,
    //   errorCode: 404,
    //   timestamp: new Date().toISOString(),
    // });

    res.locals = {
      statusCode: 404,
      data: {
        success: false,
        error: {
          message: 'Resource not found',
          details: {
            path: req.originalUrl,
            errorCode: 404,
            timestamp: new Date().toISOString()
          }
        }
      }
    }
  

  }
  next()



}

export default notFoundHandler


