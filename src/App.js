import Header from './components/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route } from "react-router-dom";
import '../src/sass/_app.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <SignUp />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;