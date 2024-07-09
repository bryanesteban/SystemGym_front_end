import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Paginator = ({ url }) => {

    const { paginator } = useSelector(state => state.users);
    return (
        <>
            {paginator?.length === 0} ||
            <ul className="pagination">
                {paginator.number == 0 ||
                <li className="page-item">
                    <Link className="page-Link" to={`${url}/${paginator.number - 1}`}>back</Link>
                </li>
                 }
                <li className={paginator.first ? 'page-item disabled' : 'page-item'}>
                    <Link className="page-link" to={`${url}/0`}>first</Link>
                </li>
                <li className={paginator.first ? 'page-item disabled' : 'page-item'}>
                    <Link className="page-link" to={`${url}/${paginator.totalPages - 1}`}>last</Link>
                </li>

                {paginator.number <= paginator.totalPages - 1 ||
                <li className="page-item">
                    <Link className="page-Link" to={`${url}/${paginator.number + 1}`}>next</Link>
                </li>
                 }
            </ul>
        </>
    )

}