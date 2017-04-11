namespace AppStorage {

    const perceptronStorageKey = 'perceptrons';

    interface PerceptronStorage {
        perceptrons: PerceptronData[];
    }

    export function getPerceptronData() {
        const json = localStorage.getItem(perceptronStorageKey);
        return json === null ? null : (JSON.parse(json) as PerceptronStorage).perceptrons;
    }

    export function savePerceptronData(perceptrons: PerceptronData[]) {
        localStorage.setItem(perceptronStorageKey,
            JSON.stringify({ perceptrons } as PerceptronStorage));
    }
    
}
