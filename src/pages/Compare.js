import Breadcrumb from '../components/Other/Breadcrumb';
import ComparingArea from '../components/Compare/ComparingArea';
import '../scss/_compare.scss';

const Compare = () => {
    return (
        <div className="compare-content">
            <div className="main">
                <Breadcrumb currentPage={"Compare"} />
                <ComparingArea />
            </div>
        </div>
    )
}

export default Compare;