declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg';

type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;
