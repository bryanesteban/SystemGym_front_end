import { useSelector } from "react-redux";

export const Paginator = () => {

    const { paginator } = useSelector(state => state.users);
    return (
        <>
            {paginator?.length === 0}
            <ul className="pagination">
                <li></li>
            </ul>
        </>
    )

}