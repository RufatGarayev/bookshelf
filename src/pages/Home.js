import HomeEntry from '../components/Home/HomeEntry/HomeEntry';
import Categories from '../components/Home/Categories/Categories';
import '../sass/_home.scss';

const Home = () => {
    return (
        <div className="home-content">
            <div className="main">
                <HomeEntry />
                <Categories />
            </div>
        </div>
    )
}

export default Home;