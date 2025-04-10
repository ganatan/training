const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Erreur serveur'
  const context = err.context || null
  console.error(`[ERROR] ${statusCode}: ${message}`)
  if (context) console.error(`[CONTEXT] ${context}`)
  res.status(statusCode).json({
    success: false,
    error: {
      message,
      ...(context && { context })
    }
  })
}

export default errorHandler
