(() => {

    addEventListener('keydown', ({ key, which }) => {
        if (key.length === 1) {
            App.inputArea.renderChar(key);
        } else if (which === 13) {
            classify();
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

    function classify() {
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
            if (!App.trained) {
                classifyMessage.textContent += `
The perceptrons have not been trained yet, so this result is probably wrong.`;
            }
            classifyMessageExpandable.expandTemporary();
        });
    }

    classifyButton.addEventListener('click', classify);

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

    if (App.initData === null) {
        trainMessage.textContent = 'Failed to load previous perceptron data from local storage';
    } else {
        trainMessage.textContent =
            'Successfully loaded previous perceptron data from local storage';
    }
    trainMessageExpandable.expandTemporary();

    addEventListener('load', () => {
        document.body.style.opacity = '1';
    });

})();
