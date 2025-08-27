import { Request, Response, NextFunction } from 'express';
import * as promClient from 'prom-client';
export declare class UnifiedPrometheusMetricsMonitoring {
    private readonly _promClient;
    private readonly _httpRequestDuration;
    private readonly _httpRequestTotal;
    constructor(_promClient: typeof promClient);
    metricsMiddleware: (req: Request, res: Response, next: NextFunction) => void;
}
