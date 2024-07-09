/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


export const Paginator = ({ url, paginator }) => {

    
    return (
        <>
            {paginator?.totalPages == 1 ||
            <ul className="pagination">
                {paginator.number == 0 ||

                    <li className="page-item">
                        <Link className="page-link" to={`${url}/${paginator.number - 1}`}>back</Link>
                    </li>
                 }

                <li className={paginator.first ? 'page-item disabled' : 'page-item'}>
                    <Link className="page-link" to={`${url}/0`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-bar-left" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0M4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5"/>
                    </svg></Link>
                </li>

                <li className={paginator.last ? 'page-item disabled' : 'page-item'}>
                    <Link className="page-link" to={`${url}/${paginator.totalPages - 1}`}>last</Link>
                </li>

                {paginator.number >= paginator.totalPages - 1 ||

                    <li className="page-item">
                        <Link className="page-link" to={`${url}/${paginator.number + 1}`}>next</Link>
                    </li>
                 }
            </ul>
            }   
        </>
    )

}