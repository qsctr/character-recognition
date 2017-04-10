"use strict";
var Main;
(function (Main) {
    function classify(image) {
        const index = Main.perceptrons.findIndex(perceptron => perceptron.activate(new Uint8ClampedArray(image)) === 1);
        postMessage({
            type: 'classifyOutput',
            output: index === -1 ? null : Main.chars[index]
        });
    }
    Main.classify = classify;
})(Main || (Main = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMtd29ya2VyL2NsYXNzaWZ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFVLElBQUksQ0FXYjtBQVhELFdBQVUsSUFBSTtJQUVWLGtCQUF5QixLQUFrQjtRQUN2QyxNQUFNLEtBQUssR0FBRyxLQUFBLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUMxQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM3RCxXQUFXLENBQUM7WUFDUixJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLE1BQU0sRUFBRSxLQUFLLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUM1QixDQUFDLENBQUM7SUFDeEIsQ0FBQztJQVBlLGFBQVEsV0FPdkIsQ0FBQTtBQUVMLENBQUMsRUFYUyxJQUFJLEtBQUosSUFBSSxRQVdiIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIE1haW4ge1xyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeShpbWFnZTogQXJyYXlCdWZmZXIpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHBlcmNlcHRyb25zLmZpbmRJbmRleChwZXJjZXB0cm9uID0+XHJcbiAgICAgICAgICAgIHBlcmNlcHRyb24uYWN0aXZhdGUobmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGltYWdlKSkgPT09IDEpO1xyXG4gICAgICAgIHBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgdHlwZTogJ2NsYXNzaWZ5T3V0cHV0JyxcclxuICAgICAgICAgICAgb3V0cHV0OiBpbmRleCA9PT0gLTEgPyBudWxsIDogY2hhcnNbaW5kZXhdXHJcbiAgICAgICAgfSBhcyBXb3JrZXJNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19