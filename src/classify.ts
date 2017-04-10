namespace App {

    type ClassifyOutput
        = { type: 'success', char: string }
        | { type: 'fail' }
        | { type: 'blocked' };

    export function classify(onOutput: (output: ClassifyOutput) => any) {
        if (training) {
            onOutput({ type: 'blocked' });
            return;
        }
        const image = inputArea.getBuffer();
        const listener: (event: MessageEvent) => void = ({ data }: { data: WorkerMessage }) => {
            if (data.type === 'classifyOutput') {
                if (data.output === null) {
                    onOutput({ type: 'fail' });
                } else {
                    onOutput({ type: 'success', char: data.output });
                }
                worker.removeEventListener('message', listener);
            }
        };
        worker.addEventListener('message', listener);
        worker.postMessage({
            type: 'classify',
            image
        } as MainMessage, [image]);
    }

}
