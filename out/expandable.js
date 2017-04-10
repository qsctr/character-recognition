"use strict";
class Expandable {
    constructor(elem, initOpen) {
        this.elem = elem;
        this.expandTimeout = null;
        if (initOpen) {
            this.expand();
        }
        else {
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
        }, 3000);
    }
    collapse() {
        this.elem.style.height = '0';
        this.elem.classList.remove('expanded');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kYWJsZS5qcyIsInNvdXJjZVJvb3QiOiJkOi9TdHVkZW50X0RhdGEvR2l0aHViL2NoYXJhY3Rlci1yZWNvZ25pdGlvbi9zcmMvIiwic291cmNlcyI6WyJleHBhbmRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUlJLFlBQW1CLElBQWlCLEVBQUUsUUFBaUI7UUFBcEMsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUZwQyxrQkFBYSxHQUFrQixJQUFJLENBQUM7UUFHaEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGVBQWU7UUFDWCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUIsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXhwYW5kYWJsZSB7XHJcblxyXG4gICAgZXhwYW5kVGltZW91dDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW06IEhUTUxFbGVtZW50LCBpbml0T3BlbjogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChpbml0T3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLmV4cGFuZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwYW5kKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbS5zdHlsZS5oZWlnaHQgPSB0aGlzLmVsZW0uc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBhbmRUZW1wb3JhcnkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kVGltZW91dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5leHBhbmRUaW1lb3V0KTtcclxuICAgICAgICAgICAgdGhpcy5leHBhbmRUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5leHBhbmQoKTtcclxuICAgICAgICB0aGlzLmV4cGFuZFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmV4cGFuZFRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxhcHNlKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbS5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==