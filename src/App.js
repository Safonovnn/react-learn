import logo from "./logo.svg";
import "./App.css";
import img from "./img/lamborghini.jpg";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Добро Пожаловать!!!!!</div>
      </header>
      <nav>
        <ul>
          <li>Главная</li>
          <li>О Компании</li>
          <li>Новости</li>
          <li>Контакты</li>
        </ul>
      </nav>
      <div>
        <img src={img} />
      </div>
    </div>
  );
}

export default App;
