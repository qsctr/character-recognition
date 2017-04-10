class Expandable {

    expandTimeout: number | null = null;

    constructor(public elem: HTMLElement, initOpen: boolean) {
        if (initOpen) {
            this.expand();
        } else {
            this.collapse();
        }
    }

    expand() {
        this.elem.style.height = this.elem.scrollHeight + 'px';
        this.elem.classList.add('expanded');
    }

    expandTemporary() {
        if (this.expandTimeout !== null) {
            clearTimeout(this.expandTimeout);
            this.expandTimeout = null;
        }
        this.expand();
        this.expandTimeout = setTimeout(() => {
            this.collapse();
            this.expandTimeout = null;
        }, 5000);
    }

    collapse() {
        this.elem.style.height = '0';
        this.elem.classList.remove('expanded');
    }

}
