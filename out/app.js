"use strict";
var App;
(function (App) {
    App.trainingCopies = 100;
    App.inputArea = new InputArea('#input-area');
    App.outputArea = new DisplayArea('#output-area');
    App.chars = range('a', 'z').concat(range('A', 'Z'), range('0', '9'), ' ');
    App.worker = new Worker('out-worker/main.js');
    App.worker.postMessage({
        type: 'init',
        chars: App.chars,
        inputCount: App.inputArea.getSize()
    });
    function range(start, end) {
        const res = [];
        for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
            res.push(String.fromCharCode(i));
        }
        return res;
    }
})(App || (App = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6ImQ6L1N0dWRlbnRfRGF0YS9HaXRodWIvY2hhcmFjdGVyLXJlY29nbml0aW9uL3NyYy8iLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBVSxHQUFHLENBdUJaO0FBdkJELFdBQVUsR0FBRztJQUVJLGtCQUFjLEdBQUcsR0FBRyxDQUFDO0lBRXJCLGFBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QyxjQUFVLEdBQUcsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFN0MsU0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0RSxVQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxJQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBTCxJQUFBLEtBQUs7UUFDTCxVQUFVLEVBQUUsSUFBQSxTQUFTLENBQUMsT0FBTyxFQUFFO0tBQ25CLENBQUMsQ0FBQztJQUVsQixlQUFlLEtBQWEsRUFBRSxHQUFXO1FBQ3JDLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNmLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1RCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNmLENBQUM7QUFFTCxDQUFDLEVBdkJTLEdBQUcsS0FBSCxHQUFHLFFBdUJaIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIEFwcCB7XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IHRyYWluaW5nQ29waWVzID0gMTAwO1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCBpbnB1dEFyZWEgPSBuZXcgSW5wdXRBcmVhKCcjaW5wdXQtYXJlYScpO1xyXG4gICAgZXhwb3J0IGNvbnN0IG91dHB1dEFyZWEgPSBuZXcgRGlzcGxheUFyZWEoJyNvdXRwdXQtYXJlYScpO1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCBjaGFycyA9IHJhbmdlKCdhJywgJ3onKS5jb25jYXQocmFuZ2UoJ0EnLCAnWicpLCByYW5nZSgnMCcsICc5JyksICcgJyk7XHJcbiAgICBleHBvcnQgY29uc3Qgd29ya2VyID0gbmV3IFdvcmtlcignb3V0LXdvcmtlci9tYWluLmpzJyk7XHJcbiAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgIHR5cGU6ICdpbml0JyxcclxuICAgICAgICBjaGFycyxcclxuICAgICAgICBpbnB1dENvdW50OiBpbnB1dEFyZWEuZ2V0U2l6ZSgpXHJcbiAgICB9IGFzIE1haW5NZXNzYWdlKTtcclxuXHJcbiAgICBmdW5jdGlvbiByYW5nZShzdGFydDogc3RyaW5nLCBlbmQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydC5jaGFyQ29kZUF0KDApOyBpIDw9IGVuZC5jaGFyQ29kZUF0KDApOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==