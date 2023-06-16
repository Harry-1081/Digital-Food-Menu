import './Pageno.css';
import { useStates } from "../../States";
import { useEffect } from 'react';
import { GrLinkPrevious,GrLinkNext } from 'react-icons/gr';


function Pageno() {
    const { getAllProducts,pageno,prevpage,nextpage } = useStates();
    
    useEffect(() => {
        getAllProducts();
        // eslint-disable-next-line
    },[pageno]);

    return(
        <>
        <div className='pagination-page'>
             <div className='pagination-div'>
                <button className='page-prev' onClick={prevpage}> <GrLinkPrevious/> </button>
                    <span className='page-num'>  {pageno} </span>
                <button className='page-next' onClick={nextpage}> <GrLinkNext/> </button>
            </div>
        </div> 
        </>
    );
};
export default Pageno;