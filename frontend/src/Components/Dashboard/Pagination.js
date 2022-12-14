import { useState } from "react";

const Pagination = (props) => {

    const totalPage = props.noOfPages;  //3 => [1, 2, 3]

    const pages = new Array(totalPage).fill(0, 0, totalPage).map((a, index) => index + 1);

    console.log(pages);

    const [pageIndex, setPageIndex] = useState(1);
    const setPage = (index) => {
        setPageIndex(index);
        props.goToPage(index);
    }




    return <>
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li key={'prev'} className="page-item page-link">Previous</li>

                {
                    pages.map(v => {

                        return <li key={v} className={v === pageIndex ? 'page-item page-link active' : 'page-item page-link'} onClick={(e) => setPage(v)}>{v}</li>
                    })

                }
                {/* 
                <li className="page-item page-link" onClick={(e) => props.goToPage(2)}>2</li>
                <li className="page-item page-link" onClick={(e) => props.goToPage(3)}>3</li> */}
                <li key={'next'} className="page-item page-link">Next</li>
            </ul>
        </nav></>
}


export default Pagination;