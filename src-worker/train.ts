namespace Main {

    export function train(trainingSets: ArrayBuffer[][]) {
        trainingSets.forEach((trainingSet, i) => {
            postMessage({
                type: 'training',
                char: chars[i],
                current: i + 1
            } as WorkerMessage);
            perceptrons[i].learn(shuffle(addOutput(trainingSet, 1)
                .concat(...trainingSets.filter((_, j) => j !== i).map(set => addOutput(set, 0)))));
        });
        postMessage({
            type: 'trainFinished'
        } as WorkerMessage);
    }

    function addOutput(buffers: ArrayBuffer[], output: 0 | 1) {
        return buffers.map(buffer =>
            [new Uint8ClampedArray(buffer), output] as [Uint8ClampedArray, 0 | 1]);
    }

    function shuffle<T>(arr: T[]) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

}
