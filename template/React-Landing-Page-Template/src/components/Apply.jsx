import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
function Apply({ jid, uid, name, email, phone, summary, education, experience, skills, createAt, updatedAt }) {


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
        <Link to={`/joblist/${uid}`}>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="col">
                        < h3 className="text-black" > {name}</h3 >
                        <p>{email}</p>
                        <p>{education}</p>
                    </div>
                </li>
            </ul>
        </Link >
    );
}
Apply.propTypes = {
    jid: Proptypes.number.isRequired,
    uid: Proptypes.number.isRequired,
    name: Proptypes.string.isRequired,
    email: Proptypes.string.isRequired,
    phone: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    education: Proptypes.string.isRequired,
    experience: Proptypes.string.isRequired,
    skills: Proptypes.string.isRequired,
    createAt: Proptypes.arrayOf(Proptypes.number),
    updatedAt: Proptypes.arrayOf(Proptypes.number).isRequired
}
export default Apply;