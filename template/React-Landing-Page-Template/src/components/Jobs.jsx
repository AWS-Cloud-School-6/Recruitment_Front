import Proptypes from "prop-types";
import { Link } from "react-router-dom";
function Jobs({ id, title, descr, company, loc, createAt, updatedAt }) {
    const createdAtArray = createAt;
    const createdAtDate = new Date(
        createdAtArray[0],
        createdAtArray[1] - 1,
        createdAtArray[2],
        createdAtArray[3],
        createdAtArray[4],
        createdAtArray[5],
        createdAtArray[6]
    );
    const ktcreateAt = createdAtDate.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
    const updatedAtArray = updatedAt;
    const updatedAtDate = new Date(
        updatedAtArray[0],
        updatedAtArray[1] - 1,
        updatedAtArray[2],
        updatedAtArray[3],
        updatedAtArray[4],
        updatedAtArray[5],
        updatedAtArray[6]
    );
    const ktupdatedAt = updatedAtDate.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
    return (
        <Link to={`/joblist/${id}`}>
            <div className="col-sm-6 col-md-4 col-lg-4 bg-info text-black table-bordered">
                < p > {title}</p >
                <h3>
                    {descr}
                </h3>
                <p>{company}</p>
                <p>{loc}</p>
                <p>{ktcreateAt}</p>
                <p>{ktupdatedAt}</p>
            </div>
        </Link>
    );
}
Jobs.propTypes = {
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    descr: Proptypes.string.isRequired,
    company: Proptypes.string.isRequired,
    loc: Proptypes.string.isRequired,
    createAt: Proptypes.arrayOf(Proptypes.number).isRequired,
    updatedAt: Proptypes.arrayOf(Proptypes.number).isRequired
}
export default Jobs;