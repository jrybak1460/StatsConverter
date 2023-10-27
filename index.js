class StatsApp {
  constructor() {
    this.numbers = []
  }


  addNumber() {
    let num = prompt("Please enter a number");
    this.numbers.push(Number(num));
  }

  calculateStats() {
    let sum = 0
    let max = this.numbers[0];

    for(let i=0; i < this.numbers.length; i++) {
      sum += this.numbers[i];
      if(this.numbers[i] > max) {
        max = this.numbers[i];
      }
    }
    let avg = sum/this.numbers.length;

    return {
      sum: sum,
      avg: avg,
      max: max
    }
  }
}

let app = new StatsApp();
while(confirm("Do you want to add a number?")) {
  app.addNumber();
}

let statistics = app.calculateStats();

console.log(`The sum of the numbers is ${statistics.sum}`);
console.log(`The average of the numbers is ${statistics.avg}`);
console.log(`The maximum number is ${statistics.max}`);



