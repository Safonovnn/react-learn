import logo from "./logo.svg";
import "./App.css";
import imgSrc from "../public/img/lamborghini.jpg";

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
        <img src={imgSrc} />
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgradskiportal018.rs%2F2021%2F08%2F05%2Fsto-da-ne-kazem-more-je-more-svuda%2F&psig=AOvVaw05qzuRTrmhk4OFt4LI61ex&ust=1693207115504000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjU6Jam_IADFQAAAAAdAAAAABAJ" />
      </div>
    </div>
  );
}

export default App;
