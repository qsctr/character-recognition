namespace Main {

    export function classify(image: ArrayBuffer) {
        const index = perceptrons.findIndex(perceptron =>
            perceptron.activate(new Uint8ClampedArray(image)) === 1);
        postMessage({
            type: 'classifyOutput',
            output: index === -1 ? null : chars[index]
        } as WorkerMessage);
    }

}
