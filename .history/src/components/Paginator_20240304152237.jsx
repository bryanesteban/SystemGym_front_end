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
                    <Link>atrás</Link>
                    </li>
            }
            </ul>
        </>
    )

}