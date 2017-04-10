namespace App {

    export let training = false;
    export let trained = false;

    export function train(
        onGenerating: (char: string, current: number, total: number) => any,
        onTraining: (char: string, current: number, total: number) => any,
        onFinished: () => any
    ) {
        training = true;
        const trainingSets = [] as ArrayBuffer[][];
        let i = 0;
        const interval = setInterval(() => {
            if (i === chars.length) {
                clearInterval(interval);
                const listener: (event: MessageEvent) => void =
                    ({ data }: { data: WorkerMessage }) => {
                        switch (data.type) {
                            case 'training':
                                onTraining(data.char, data.current, chars.length);
                                break;
                            case 'trainFinished':
                                onFinished();
                                worker.removeEventListener('message', listener);
                                training = false;
                                trained = true;
                                break;
                        }
                    };
                worker.addEventListener('message', listener);
                worker.postMessage({
                    type: 'train',
                    trainingSets
                } as MainMessage, ([] as ArrayBuffer[]).concat(...trainingSets));
                return;
            }
            onGenerating(chars[i], i + 1, chars.length);
            trainingSets.push(Array.from({ length: trainingCopies }, (_, j) => {
                inputArea.renderChar(chars[i]);
                if (j !== 0) {
                    inputArea.addNoise();
                }
                return inputArea.getBuffer();
            }));
            i++;
        });
    }
    
}
