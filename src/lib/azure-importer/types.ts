export type AzureOutputs = {
  timestamps: string[];
  cpuUtilizations: string[];
  memAvailable: string[];
};

export type AzureInputs = {
  resourceGroupName: string;
  vmName: string;
  subscriptionId: string;
  timespan: string;
  interval: string;
  aggregation: string;
  timestamp: string;
  duration: string;
  window: string;
  metricnamespace: string;
};

export type GetMetricsParams = {
  subscriptionId: string;
  resourceGroupName: string;
  timespan: string;
  interval: string;
  aggregation: string;
  vmName: string;
  metricnamespace: string;
};

export type AzureMetadataOutputs = {
  location: string;
  instanceType: string;
  totalMemoryGB: string;
};
