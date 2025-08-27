"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnifiedPrometheusMetricsMonitoring = void 0;
class UnifiedPrometheusMetricsMonitoring {
    constructor(_promClient) {
        this._promClient = _promClient;
        this.metricsMiddleware = (req, res, next) => {
            const endTimer = this.httpRequestDuration.startTimer();
            res.on('finish', () => {
                const route = req.path; // issue with req.route?.path -> this gives the matched route handler path
                const statusCode = res.statusCode.toString();
                endTimer({
                    method: req.method,
                    route,
                    status_code: statusCode,
                });
                this.httpRequestTotal.labels(req.method, route, statusCode).inc();
            });
            // can add any metrics of request closes
            res.on('close', () => { });
            next();
        };
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
}
exports.UnifiedPrometheusMetricsMonitoring = UnifiedPrometheusMetricsMonitoring;
