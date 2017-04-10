namespace App {

    export const trainingCopies = 100;

    export const inputArea = new InputArea('#input-area');
    export const outputArea = new DisplayArea('#output-area');

    export const chars = range('a', 'z').concat(range('A', 'Z'), range('0', '9'), ' ');
    export const worker = new Worker('out-worker/main.js');
    worker.postMessage({
        type: 'init',
        chars,
        inputCount: inputArea.getSize()
    } as MainMessage);

    function range(start: string, end: string) {
        const res = [];
        for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
            res.push(String.fromCharCode(i));
        }
        return res;
    }

}
