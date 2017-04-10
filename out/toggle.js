"use strict";
class Toggle extends Expandable {
    constructor(button, expandableElem, openState) {
        super(expandableElem, openState);
        this.button = button;
        this.openState = openState;
        this.button.addEventListener('click', () => {
            this.openState = !this.openState;
            this.update();
        });
        this.toggleName = this.button.textContent;
        this.update();
    }
    update() {
        if (this.openState) {
            this.expand();
        }
        else {
            this.collapse();
        }
        this.button.textContent = `${this.openState ? 'Hide' : 'Show'} ${this.toggleName}`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmpzIiwic291cmNlUm9vdCI6ImQ6L1N0dWRlbnRfRGF0YS9HaXRodWIvY2hhcmFjdGVyLXJlY29nbml0aW9uL3NyYy8iLCJzb3VyY2VzIjpbInRvZ2dsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsWUFBYSxTQUFRLFVBQVU7SUFJM0IsWUFBbUIsTUFBZSxFQUFFLGNBQTJCLEVBQVMsU0FBa0I7UUFDdEYsS0FBSyxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQURsQixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQXNDLGNBQVMsR0FBVCxTQUFTLENBQVM7UUFFdEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQXFCLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNO1FBQ0YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sR0FBRyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3ZGLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRvZ2dsZSBleHRlbmRzIEV4cGFuZGFibGUge1xyXG5cclxuICAgIHRvZ2dsZU5hbWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYnV0dG9uOiBFbGVtZW50LCBleHBhbmRhYmxlRWxlbTogSFRNTEVsZW1lbnQsIHB1YmxpYyBvcGVuU3RhdGU6IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcihleHBhbmRhYmxlRWxlbSwgb3BlblN0YXRlKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuU3RhdGUgPSAhdGhpcy5vcGVuU3RhdGU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50b2dnbGVOYW1lID0gdGhpcy5idXR0b24udGV4dENvbnRlbnQgYXMgc3RyaW5nO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wZW5TdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmV4cGFuZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5idXR0b24udGV4dENvbnRlbnQgPSBgJHt0aGlzLm9wZW5TdGF0ZSA/ICdIaWRlJyA6ICdTaG93J30gJHt0aGlzLnRvZ2dsZU5hbWV9YDtcclxuICAgIH1cclxuXHJcbn1cclxuIl19