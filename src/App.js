import Header from './components/Header/Header';
import HomeEntry from './components/HomeEntry/HomeEntry';
import Categories from './components/Categories/Categories';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import '../src/sass/_app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeEntry />
      <Categories />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;