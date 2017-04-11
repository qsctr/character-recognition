class Perceptron {

    readonly learningRate = 0.3;
    readonly iterations = 1000;
    readonly errorRange = 0;

    constructor(
        inputCount: number,
        public weights = Array.from({ length: inputCount }, Perceptron.randomWeight),
        public threshold = Perceptron.randomWeight()
    ) {}

    static randomWeight() {
        return (Math.random() - 0.5) / 5;
    }

    activate(inputs: Uint8ClampedArray) {
        return inputs.reduce((acc, x, i) => acc + x * this.weights[i], 0) > this.threshold ? 1 : 0;
    }

    learn(trainingSet: [Uint8ClampedArray, 0 | 1][]) {
        for (let i = 0; i < this.iterations; i++) {
            let totalError = 0;
            for (const [inputs, target] of trainingSet) {
                const error = target - this.activate(inputs);
                totalError += error ** 2;
                const learnWeight = (weight: number, input: number) =>
                    weight + this.learningRate * error * input;
                this.weights = this.weights.map((x, i) => learnWeight(x, inputs[i]));
                this.threshold = learnWeight(this.threshold, -1);
            }
            if (totalError <= this.errorRange) {
                break;
            }
        }
    }

    toPerceptronData() {
        return {
            weights: this.weights,
            threshold: this.threshold
        };
    }

}
