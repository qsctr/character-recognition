"use strict";
class Perceptron {
    constructor(inputCount) {
        this.learningRate = 0.3;
        this.iterations = 1000;
        this.errorRange = 0;
        const randomWeight = () => (Math.random() - 0.5) / 5;
        this.weights = Array.from({ length: inputCount }, randomWeight);
        this.threshold = randomWeight();
    }
    activate(inputs) {
        return inputs.reduce((acc, x, i) => acc + x * this.weights[i], 0) > this.threshold ? 1 : 0;
    }
    learn(trainingSet) {
        for (let i = 0; i < this.iterations; i++) {
            let totalError = 0;
            for (const [inputs, target] of trainingSet) {
                const error = target - this.activate(inputs);
                totalError += Math.pow(error, 2);
                const learnWeight = (weight, input) => weight + this.learningRate * error * input;
                this.weights = this.weights.map((x, i) => learnWeight(x, inputs[i]));
                this.threshold = learnWeight(this.threshold, -1);
            }
            if (totalError <= this.errorRange) {
                break;
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyY2VwdHJvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy13b3JrZXIvcGVyY2VwdHJvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFRSSxZQUFZLFVBQWtCO1FBTnJCLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUtwQixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQXlCO1FBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQXlDO1FBQzNDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZDLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNuQixHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLE1BQU0sS0FBSyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QyxVQUFVLElBQUksU0FBQSxLQUFLLEVBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ3pCLE1BQU0sV0FBVyxHQUFHLENBQUMsTUFBYyxFQUFFLEtBQWEsS0FDOUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRSxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsS0FBSyxDQUFDO1lBQ1YsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQZXJjZXB0cm9uIHtcclxuXHJcbiAgICByZWFkb25seSBsZWFybmluZ1JhdGUgPSAwLjM7XHJcbiAgICByZWFkb25seSBpdGVyYXRpb25zID0gMTAwMDtcclxuICAgIHJlYWRvbmx5IGVycm9yUmFuZ2UgPSAwO1xyXG4gICAgd2VpZ2h0czogbnVtYmVyW107XHJcbiAgICB0aHJlc2hvbGQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpbnB1dENvdW50OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCByYW5kb21XZWlnaHQgPSAoKSA9PiAoTWF0aC5yYW5kb20oKSAtIDAuNSkgLyA1O1xyXG4gICAgICAgIHRoaXMud2VpZ2h0cyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGlucHV0Q291bnQgfSwgcmFuZG9tV2VpZ2h0KTtcclxuICAgICAgICB0aGlzLnRocmVzaG9sZCA9IHJhbmRvbVdlaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKGlucHV0czogVWludDhDbGFtcGVkQXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXRzLnJlZHVjZSgoYWNjLCB4LCBpKSA9PiBhY2MgKyB4ICogdGhpcy53ZWlnaHRzW2ldLCAwKSA+IHRoaXMudGhyZXNob2xkID8gMSA6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbGVhcm4odHJhaW5pbmdTZXQ6IFtVaW50OENsYW1wZWRBcnJheSwgMCB8IDFdW10pIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlcmF0aW9uczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0b3RhbEVycm9yID0gMDtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBbaW5wdXRzLCB0YXJnZXRdIG9mIHRyYWluaW5nU2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IHRhcmdldCAtIHRoaXMuYWN0aXZhdGUoaW5wdXRzKTtcclxuICAgICAgICAgICAgICAgIHRvdGFsRXJyb3IgKz0gZXJyb3IgKiogMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlYXJuV2VpZ2h0ID0gKHdlaWdodDogbnVtYmVyLCBpbnB1dDogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodCArIHRoaXMubGVhcm5pbmdSYXRlICogZXJyb3IgKiBpbnB1dDtcclxuICAgICAgICAgICAgICAgIHRoaXMud2VpZ2h0cyA9IHRoaXMud2VpZ2h0cy5tYXAoKHgsIGkpID0+IGxlYXJuV2VpZ2h0KHgsIGlucHV0c1tpXSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJlc2hvbGQgPSBsZWFybldlaWdodCh0aGlzLnRocmVzaG9sZCwgLTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0b3RhbEVycm9yIDw9IHRoaXMuZXJyb3JSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==