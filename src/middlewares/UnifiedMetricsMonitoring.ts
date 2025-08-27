import { Request, Response, NextFunction } from 'express';
import * as promClient from 'prom-client';
export class UnifiedPrometheusMetricsMonitoring {
   public readonly httpRequestDuration;
   public readonly httpRequestTotal;

   constructor(private readonly _promClient: typeof promClient) {
      const httpRequestDuration = new this._promClient.Histogram({
         name: 'http_request_duration_seconds',
         help: 'Duration of HTTP requests in seconds',
         labelNames: ['method', 'route', 'status_code'],
         buckets: [0.1, 0.3, 0.5, 1, 3, 5, 10], // seconds
      });
      this.httpRequestDuration = httpRequestDuration;

      const httpRequestTotal = new this._promClient.Counter({
         name: 'http_requests_total',
         help: 'Total number of HTTP requests',
         labelNames: ['method', 'route', 'status_code'],
      });
      this.httpRequestTotal = httpRequestTotal;
   }

   metricsMiddleware = (req: Request, res: Response, next: NextFunction): void => {
      const endTimer = this.httpRequestDuration.startTimer();

      res.on('finish', () => {
         const route = req.route?.path || req.path;
         const statusCode = res.statusCode.toString();

         endTimer({
            method: req.method,
            route,
            status_code: statusCode,
         });

         this.httpRequestTotal.labels(req.method, route, statusCode).inc();
      });

      // can add any metrics of request closes
      res.on('close', () => {});

      next();
   };
}
