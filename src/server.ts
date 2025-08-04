import express from 'express';
import pino from 'pino';
import pinoHttp from 'pino-http';
import { connectFirmware } from './firmware/index.js';

// Use synchronous logging in tests to avoid dangling async handles
const logger = pino(
  { level: process.env.LOG_LEVEL || 'info' },
  pino.destination({ sync: true })
);

/**
 * Build an Express application with standard middleware.
 * Extracted for testability so integration tests can exercise routes directly.
 */
export const buildServer = () => {
  const app = express();

  // Structured JSON logging for every request
  app.use(pinoHttp({ logger }));

  // Health-check endpoint
  app.get('/ping', (_req, res) => {
    res.json({ message: 'pong' });
  });

  return app;
};

/** Start the HTTP server and initiate firmware connectivity */
export const startServer = () => {
  const app = buildServer();
  const port = Number(process.env.PORT) || 3000;

  const server = app.listen(port, () => {
    logger.info({ port }, 'server listening');
    // Boot firmware communication channel on startup
    connectFirmware();
  });

  return server;
};

// Auto-start when executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  startServer();
}

