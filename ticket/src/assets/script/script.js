const rootElement = document.getElementById("root");
import Header from '../../components/Header.js';
import Cell from '../../components/Cellbar.js';
const DataArr = Array(8).fill(0).map(Number.call, Number);
const App = () => {
  return React.createElement(
    "div",
    { className: "App" },
    Header,
    React.createElement("div",
    { className: "Barbox" },
    DataArr.map((val, i /*#__PURE__*/) =>
      React.createElement(Cell, { key: i, index: i })
    )
    )
  );
};

ReactDOM.render(
  /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement(App, null)
  ),
  rootElement
);
