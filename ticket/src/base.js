const rootElement = document.getElementById("root");
import Header from './components/Header.js';
import Faceintro from './pages/dig.js';
import page01 from './pages/dig1.js';
const App = () => {
  return React.createElement(
    "div",
    { className: "App" },
    Faceintro,
    page01
  );
};

ReactDOM.render(
  React.createElement(
    "div",
    {id: 'mainbody'},
    Header,
    React.createElement(App, null)
  ),
  rootElement
);
