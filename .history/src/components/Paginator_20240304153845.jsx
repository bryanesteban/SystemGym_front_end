import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Paginator = () => {

    const { paginator } = useSelector(state => state.users);
    return (
        <>
            {paginator?.length === 0}
            <ul className="pagination">
                {paginator.number == 0 ||
                <li className="page-item">
                    <Link className="page-Link" to={`/user/page/${paginator.number-1}`}>atrás</Link>
                </li>
                 }
                <li className={paginator.first ? 'page-item disable' : 'page-item'}>
                    <Link className="page-link" to={'/users/page/0'}>primera</Link>
                </li>
                <li className={paginator.first ? 'page-item disable' : 'page-item'}>
                    <Link className="page-link" to={`/users/page/0`}>primera</Link>
                </li>

                {paginator.number >= paginator.totalPages -1 ||
                <li className="page-item">
                    <Link className="page-Link" to={`/user/page/${paginator.number+1}`}>siguiente</Link>
                </li>
                 }
            </ul>
        </>
    )

}