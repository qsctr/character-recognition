importScripts('perceptron.js');
importScripts('train.js');
importScripts('classify.js');

namespace Main {

    export let chars = [] as string[];
    export let perceptrons = [] as Perceptron[];

    onmessage = ({ data }: { data: MainMessage }) => {
        switch (data.type) {
            case 'init':
                chars = data.chars;
                perceptrons = chars.map(() => new Perceptron(data.inputCount));
                break;
            case 'train':
                train(data.trainingSets);
                break;
            case 'classify':
                classify(data.image);
                break;
        }
    };

}
