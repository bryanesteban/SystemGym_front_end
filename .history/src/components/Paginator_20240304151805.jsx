import { useSelector } from "react-redux";

export const Paginator = () => {

    return { paginator } = useSelector(state => state.users);


}