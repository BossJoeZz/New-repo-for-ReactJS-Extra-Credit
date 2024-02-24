import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid1: [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12]
      ],
      grid2: [
        [1, 1, 4, 1],
        [1, 6],
        [1, 2, 1, -3]
      ],
      grid3: [
        [1, null, 1, null],
        [1, 0],
        [1, 2, 1, undefined]
      ],
      grid4: [
        [-1, null],
        [],
        [0, -2, -1]
      ],
      grid5: [
        [],
        [],
        []
      ]
    };
  }

  findBiggestNumber = (map) => {
    let resultMax = undefined;
    for (let numArray of map) {
      const filteredArray = numArray.filter(num => typeof num === 'number')
      if (numArray.length < 1) {
        continue
      }
      let maxCur = Math.max(...filteredArray)
      if (resultMax === undefined) {
        resultMax = maxCur;
      } else if (maxCur > resultMax) {
        resultMax = maxCur;
      }
    }
    return resultMax
  }

  balancedString = (str) => {
    if (str.length === 0) {
      return true;
    }
    let counts = {}
    for (let s of str) {
      counts[s] = (counts[s] || 0) + 1;
    }
    let freq = new Set(Object.values(counts))
    return freq.size === 1;
  }

  additivePersistence = (num) => {
    let count = 0;
    while (num >= 10) {
      count += 1;
      let stringNum = num.toString();
      let curSum = 0;
      for (let digit of stringNum) {
        curSum += parseInt(digit);
      }
      num = curSum;
    }
    return count
  }

  render() {
    const { grid1, grid2, grid3, grid4, grid5 } = this.state;

    return (
      <div>
        <h1>Starting tests for ZhengQiao</h1>

        <h2>All Grid Data</h2>
        <p>Grid 1: {JSON.stringify(grid1)}</p>
        <p>Grid 2: {JSON.stringify(grid2)}</p>
        <p>Grid 3: {JSON.stringify(grid3)}</p>
        <p>Grid 4: {JSON.stringify(grid4)}</p>
        <p>Grid 5: {JSON.stringify(grid5)}</p>

        <h2>Test 1 - findBiggestNumber</h2>
        <p>Grid 1: {this.findBiggestNumber(grid1)}</p>
        <p>Grid 2: {this.findBiggestNumber(grid2)}</p>
        <p>Grid 3: {this.findBiggestNumber(grid3)}</p>
        <p>Grid 4: {this.findBiggestNumber(grid4)}</p>
        <p>Grid 5: {this.findBiggestNumber(grid5)}</p>

        <h2>Test 2 - balancedString</h2>
        <p>"xxxyyyzzz" is balanced: {this.balancedString("xxxyyyzzz").toString()}</p>
        <p>"xxxyyyzzzz" is balanced: {this.balancedString("xxxyyyzzzz").toString()}</p>
        <p>"abccbaabccba" is balanced: {this.balancedString("abccbaabccba").toString()}</p>
        <p>"abcdefghijklmnopqrstuvwxyz" is balanced: {this.balancedString("abcdefghijklmnopqrstuvwxyz").toString()}</p>
        <p>"pqq" is balanced: {this.balancedString("pqq").toString()}</p>
        <p>"fdedfdeffeddefeeeefddf" is balanced: {this.balancedString("fdedfdeffeddefeeeefddf").toString()}</p>
        <p>"www" is balanced: {this.balancedString("www").toString()}</p>
        <p>"x" is balanced: {this.balancedString("x").toString()}</p>
        <p>"" is balanced: {this.balancedString("").toString()}</p>

        <h2>Test 3 - additivePersistence</h2>
        <p>1234 additive persistence: {this.additivePersistence(1234)}</p>
        <p>13 additive persistence: {this.additivePersistence(13)}</p>
        <p>9876 additive persistence: {this.additivePersistence(9876)}</p>
        <p>199 additive persistence: {this.additivePersistence(199)}</p>
        <p>1679583 additive persistence: {this.additivePersistence(1679583)}</p>
      </div>
    );
  }
}

export default App;