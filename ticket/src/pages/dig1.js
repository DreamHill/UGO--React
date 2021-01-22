// 给自己挖坑 第二个坑 
import Cell from '../components/pit1.js';
const DataArr = Array(8).fill(0).map(Number.call, Number);
const dig1 = React.createElement(
    "div",
    {id: 'section01'},
    React.createElement("div",
      { className: "Barbox" },
      DataArr.map((val, i) =>
        React.createElement(Cell, { key: i, index: i })
      )
    )
)

export default dig1