// types.ts
export type ModelType = 'regression' | 'classification';
export type DataType = 'csv' | 'json';
export type ActivationFunction = 'relu' | 'sigmoid' | 'tanh';
export type Optimizer = 'sgd' | 'adam' | 'rmsprop';

export interface ModelConfig {
  type: ModelType;
  inputs?: number;
  outputs?: number;
  activation?: ActivationFunction;
  epochs?: number;
  optimizer?: Optimizer;
  learningRate?: number;
  batchSize?: number;
}

export interface TrainingConfig {
  model: ModelConfig;
  data: {
    type: DataType;
    path: string;
  };
}

export interface TrainingResults {
  metrics: {
    accuracy: number;
    loss: number;
  };
  model: {
    weights: number[];
    bias: number;
  };
}

export interface DeploymentConfig {
  model: ModelConfig;
  inputShape: number[];
}