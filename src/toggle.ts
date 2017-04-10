class Toggle extends Expandable {

    toggleName: string;

    constructor(public button: Element, expandableElem: HTMLElement, public openState: boolean) {
        super(expandableElem, openState);
        this.button.addEventListener('click', () => {
            this.openState = !this.openState;
            this.update();
        });
        this.toggleName = this.button.textContent as string;
        this.update();
    }

    update() {
        if (this.openState) {
            this.expand();
        } else {
            this.collapse();
        }
        this.button.textContent = `${this.openState ? 'Hide' : 'Show'} ${this.toggleName}`;
    }

}
