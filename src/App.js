import Header from './components/Header/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import BookDetails from './pages/BookDetails';
import Wishlist from './pages/WishList';
import Compare from './pages/Compare';
import Checkout from './pages/Checkout';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import BackToTopBtn from './components/Other/BackToTopBtn';
import configureStore from './redux/store/configureStore';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header>
            <Header />
          </header>
          <main>
            <Route path="/" component={Home} exact />
            <Route path="/shop" component={Shop} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/cart" component={Cart} />
            <Route path="/book-details/:id" component={BookDetails} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/compare" component={Compare} />
            <Route path="/checkout" component={Checkout} />
            <SignUp />
          </main>
          <footer>
            <Footer />
          </footer>
          <BackToTopBtn />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;