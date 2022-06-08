import { useEffect, useState } from 'react';
import ReactPaginate from "react-paginate";
import * as FaIcons from 'react-icons/fa';

export default function Searchmap(props) {
    
    // PAGINATION
    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

  return (
    <>
        {currentItems.map(image => {
            return (
                <div className='searchmap'>
                    <div className='searchmap-container'>
                    <div className='centered-content row'>
                        <div className='col-2 centered-content'>
                        <div className='image'><img src={image.url} alt={ image.title } width='40' /></div>
                        </div>
                        <div className='searchmap-detail col-7'>
                        <span className='searchmap-title'> lorem ipsum</span>
                        <span className='searchmap-publisher'> lorem ipsum</span>
                        </div>
                        <div className='searchmap-check col-1'>
                        <div className='search-check-container'>
                            <label for={image.url}><input type='checkbox' key={image.url} id={image.url}/><span className='check-label'><FaIcons.FaCheckCircle /></span></label>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            );
        })}
        <ReactPaginate
            breakLabel=".."
            nextLabel=">>"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            previousLabel="<<"
            renderOnZeroPageCount={null}
            containerClassName="sm-pagination"
            pageLinkClassName='page-num'
            previousLinkClassName='page-num'
            nextLinkClassName='page-num'
            activeLinkClassName='active'
        />
    </>
  )
}
