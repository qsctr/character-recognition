"use strict";
var Main;
(function (Main) {
    function train(trainingSets) {
        trainingSets.forEach((trainingSet, i) => {
            postMessage({
                type: 'training',
                char: Main.chars[i],
                current: i + 1
            });
            Main.perceptrons[i].learn(shuffle(addOutput(trainingSet, 1)
                .concat(...trainingSets.filter((_, j) => j !== i).map(set => addOutput(set, 0)))));
        });
        postMessage({
            type: 'trainFinished',
            newData: Main.perceptrons.map(perceptron => perceptron.toPerceptronData())
        });
    }
    Main.train = train;
    function addOutput(buffers, output) {
        return buffers.map(buffer => [new Uint8ClampedArray(buffer), output]);
    }
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
})(Main || (Main = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMtd29ya2VyL3RyYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFVLElBQUksQ0ErQmI7QUEvQkQsV0FBVSxJQUFJO0lBRVYsZUFBc0IsWUFBNkI7UUFDL0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2hDLFdBQVcsQ0FBQztnQkFDUixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLEtBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDZCxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUM7YUFDQSxDQUFDLENBQUM7WUFDcEIsS0FBQSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztpQkFDakQsTUFBTSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNGLENBQUMsQ0FBQyxDQUFDO1FBQ0gsV0FBVyxDQUFDO1lBQ1IsSUFBSSxFQUFFLGVBQWU7WUFDckIsT0FBTyxFQUFFLEtBQUEsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDdkQsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFkZSxVQUFLLFFBY3BCLENBQUE7SUFFRCxtQkFBbUIsT0FBc0IsRUFBRSxNQUFhO1FBQ3BELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFDckIsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBK0IsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxpQkFBb0IsR0FBUTtRQUN4QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdEMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNmLENBQUM7QUFFTCxDQUFDLEVBL0JTLElBQUksS0FBSixJQUFJLFFBK0JiIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIE1haW4ge1xyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiB0cmFpbih0cmFpbmluZ1NldHM6IEFycmF5QnVmZmVyW11bXSkge1xyXG4gICAgICAgIHRyYWluaW5nU2V0cy5mb3JFYWNoKCh0cmFpbmluZ1NldCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBwb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAndHJhaW5pbmcnLFxyXG4gICAgICAgICAgICAgICAgY2hhcjogY2hhcnNbaV0sXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBpICsgMVxyXG4gICAgICAgICAgICB9IGFzIFdvcmtlck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBwZXJjZXB0cm9uc1tpXS5sZWFybihzaHVmZmxlKGFkZE91dHB1dCh0cmFpbmluZ1NldCwgMSlcclxuICAgICAgICAgICAgICAgIC5jb25jYXQoLi4udHJhaW5pbmdTZXRzLmZpbHRlcigoXywgaikgPT4gaiAhPT0gaSkubWFwKHNldCA9PiBhZGRPdXRwdXQoc2V0LCAwKSkpKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICB0eXBlOiAndHJhaW5GaW5pc2hlZCcsXHJcbiAgICAgICAgICAgIG5ld0RhdGE6IHBlcmNlcHRyb25zLm1hcChwZXJjZXB0cm9uID0+IHBlcmNlcHRyb24udG9QZXJjZXB0cm9uRGF0YSgpKVxyXG4gICAgICAgIH0gYXMgV29ya2VyTWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkT3V0cHV0KGJ1ZmZlcnM6IEFycmF5QnVmZmVyW10sIG91dHB1dDogMCB8IDEpIHtcclxuICAgICAgICByZXR1cm4gYnVmZmVycy5tYXAoYnVmZmVyID0+XHJcbiAgICAgICAgICAgIFtuZXcgVWludDhDbGFtcGVkQXJyYXkoYnVmZmVyKSwgb3V0cHV0XSBhcyBbVWludDhDbGFtcGVkQXJyYXksIDAgfCAxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2h1ZmZsZTxUPihhcnI6IFRbXSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgICAgIFthcnJbaV0sIGFycltqXV0gPSBbYXJyW2pdLCBhcnJbaV1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=