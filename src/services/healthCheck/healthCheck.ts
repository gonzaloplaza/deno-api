type HealthCheck = {
  success: boolean;
  timestamp: number;
};

export const healthCheck = (): HealthCheck => ({
  success: true,
  timestamp: new Date().getTime(),
});
