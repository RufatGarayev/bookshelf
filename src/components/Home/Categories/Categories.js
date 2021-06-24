import BestSeller from './BestSeller';
import NewReleases from './NewReleases';

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