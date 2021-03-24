import logo from './logo.svg';
import './App.css';

function App() {
  var i = 1;

  var myStyle = {

  }


  return (
    <div class="App">
      <nav class="navbar">
        <div class="container">

          <div class="navbar-header">
            <button class="navbar-toggler" data-toggle="open-navbar1">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <a href="#">
              <h4>ABC... Ministries..<span>logo</span></h4>
            </a>
          </div>

          <div class="navbar-menu" id="open-navbar1">
            <ul class="navbar-nav">
              <li class="active"><a href="#">Home</a></li>
              <li class="navbar-dropdown">
                <a href="#" class="dropdown-toggler" data-dropdown="my-dropdown-id">
                  Team <i class="fa fa-angle-down"></i>
                </a>
                
              </li>
              <li class="navbar-dropdown">
                <a href="#" class="dropdown-toggler" data-dropdown="blog">
                  Gallery <i class="fa fa-angle-down"></i>
                </a>
                
              </li>
              <li><a href="#">Sermons</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Groups</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

function Content() {
  return (
    <div className="Content">
      <p>ABC --- Welcoms you ................... ABC --- Welcoms you ................... ABC --- Welcoms you ................... ABC --- Welcoms you ................... ABC --- Welcoms you ...................</p>
      <p>ABC --- Welcoms you ................... ABC --- Welcoms you ................... ABC --- Welcoms you ................... ABC --- Welcoms you ................... ABC --- Welcoms you ...................</p>
    </div>
  );
}

function Header() {
  return (
    <header className="Header">
      <img src="https://codetheweb.blog/assets/img/icon2.png" />
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Terms of use</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default App;
