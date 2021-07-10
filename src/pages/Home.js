import { useEffect } from 'react';
import HomeEntry from '../components/Home/HomeEntry/HomeEntry';
import Categories from '../components/Home/Categories/Categories';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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