import logo from './images/logo.png';
import logo2 from './images/logo2.png';
import img from './images/img.png';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <nav className="nav">
          <img src={logo2} alt="logo2" />
          <img src={logo} alt="logo" />
        </nav>
        <div classname="header">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer
          </p>
          <button>Awesome!</button>
        </div>
      </div>
      <div>
        <img src={img} alt="img" />
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
        <img src={img3} alt="img3" />
        <div className="undertext">
          <h5>Declarative</h5>
          <small>React makes it painless to create interactive UIs.</small>
          <h5>Components</h5>
          <small>Build encapsulated components that manage their state.</small>
          <h5>Single-Way</h5>
          <small>A set of immutable values are passed to the components.</small>
          <h5>JSX</h5>
          <small>Statically-typed, designed to run on modern browsers.</small>
        </div>
      </div>
    </div>
  );
}

export default App;
