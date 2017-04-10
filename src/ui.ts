(() => {

    addEventListener('keydown', ({ key }) => {
        if (key.length === 1) {
            App.inputArea.renderChar(key);
        }
    });

    new Toggle(document.querySelector('#help-toggle-button') as Element,
        document.querySelector('#help-toggle-area') as HTMLElement, false);

    const addNoiseButton = document.querySelector('#add-noise') as Element;

    addNoiseButton.addEventListener('click', () => {
        App.inputArea.addNoise();
    });

    const classifyButton = document.querySelector('#classify') as Element;
    const classifyMessage = document.querySelector('#classify-message') as HTMLElement;
    const classifyMessageExpandable = new Expandable(classifyMessage, false);

    classifyButton.addEventListener('click', () => {
        App.classify(output => {
            switch (output.type) {
                case 'success':
                    classifyMessage.textContent = `Classified as '${output.char}'`;
                    App.outputArea.renderChar(output.char);
                    break;
                case 'fail':
                    classifyMessage.textContent = 'Could not classify';
                    App.outputArea.fillBlack();
                    break;
                case 'blocked':
                    classifyMessage.textContent = 'Cannot classify while training';
                    App.outputArea.fillBlack();
                    break;
            }
            classifyMessageExpandable.expandTemporary();
        });
    });

    const trainButton = document.querySelector('#train') as Element;
    const trainMessage = document.querySelector('#train-message') as HTMLElement;
    const trainMessageExpandable = new Expandable(trainMessage, false);

    trainButton.addEventListener('click', () => {
        trainMessage.textContent = 'Generating training sets';
        trainMessageExpandable.expand();
        App.train((char, current, total) => {
            trainMessage.textContent =
                `Generating training sets for '${char}' (${current} of ${total})`;
        }, (char, current, total) => {
            trainMessage.textContent =
                `Training perceptron for '${char}' (${current} of ${total})`;
        }, () => {
            trainMessage.textContent = 'Finished training';
            trainMessageExpandable.expandTemporary();
        });
    });

})();
