// types.ts

export type ActivationFunction = 'relu' | 'sigmoid' | 'tanh' | 'softmax';

export type ModelType = 'linear' | 'keras';
export type LayerType = 'dense' | 'conv2d' | 'maxpool2d';

export type TrainOptions = {
  epochs: number;
  batch_size: number;
  optimizer: string;
  loss: string;
  metrics: string[];
  validation_data?: [number[][], number[][]];
  validation_split?: number;
  shuffle: boolean;
};

export type TrainResult = {
  history: {
    epoch: number;
    loss: number;
    metrics: { [key: string]: number };
  }[];
  model: any;
};

export type PredictOptions = {
  input: number[][];
  batch_size: number;
};

export type PredictResult = {
  predictions: number[][];
};