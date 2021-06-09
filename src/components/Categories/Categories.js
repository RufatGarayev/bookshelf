import BestSeller from './BestSeller';
import NewReleases from './NewReleases';
import '../../sass/_categories.scss';

const Categories = () => {
    return (
        <section id="categories">
            <div className="container">
                <BestSeller />
                <NewReleases />
            </div>
        </section>
    )
}

export default Categories;