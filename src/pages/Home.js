import HomeEntry from '../components/HomeEntry/HomeEntry';
import Categories from '../components/Categories/Categories';

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