import { Request, Response, NextFunction } from 'express';
import * as promClient from 'prom-client';
export declare class UnifiedPrometheusMetricsMonitoring {
    private readonly _promClient;
    readonly httpRequestDuration: promClient.Histogram<"route" | "method" | "status_code">;
    readonly httpRequestTotal: promClient.Counter<"route" | "method" | "status_code">;
    constructor(_promClient: typeof promClient);
    metricsMiddleware: (req: Request, res: Response, next: NextFunction) => void;
}
