declare type MainMessage
    = { type: 'init', chars: string[], inputCount: number }
    | { type: 'train', trainingSets: ArrayBuffer[][] }
    | { type: 'classify', image: ArrayBuffer };

declare type WorkerMessage
    = { type: 'classifyOutput', output: string | null }
    | { type: 'training', char: string, current: number }
    | { type: 'trainFinished' };
