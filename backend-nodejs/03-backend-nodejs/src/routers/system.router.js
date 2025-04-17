router.get('/metrics', authMiddleware, metricsHandler);  // Métriques applicatives
// router.get('/config', authMiddleware, configHandler);    // Configuration runtime
// router.get('/routes', authMiddleware, routesHandler);   // Liste des routes chargées