import '../Home/Home.css';
import { useStates } from '../../States';
import { useEffect } from 'react';
import { motion } from "framer-motion";
import { MdAddBox,MdEdit } from "react-icons/md"
import AddProduct from './AddProduct';
import { Tooltip } from '@mui/material';
import { RiDeleteBinLine } from 'react-icons/ri';

function AdminHome() {
    const { getAllProducts,product,deletefromDB,addprod,setaddprod } = useStates();

    useEffect(() => {
        getAllProducts();
        // eslint-disable-next-line
    },[]);
  
    return (
        <>
         <motion.div className="product-page">
         <Tooltip>
            <button className='addpage-link' onClick={() => setaddprod(true)}>
              <MdAddBox/> Add New Products
             {addprod && <AddProduct show={setaddprod}/>}
            </button>
         </Tooltip>
             
           {product.map((product,i) => {
            return(
                <>
                <motion.div layout key={i} className="admin-div">
                    <button className='edit-btn'
                    ><MdEdit/></button>
                    <button className='delete-btn' onClick={function (e) {deletefromDB(product.productId)}}
                    ><RiDeleteBinLine/></button>
                    <img className='product-img' src={product.productUrl} alt=""></img>
                    <span className='product-name'><b>{product.productName}</b></span>
                    <span className='product-rate'><b>{product.productRate}.00 </b></span>
                    <button className='product-category'>{product.productCategory}</button>
                </motion.div>
                </>
            )
        })}
        </motion.div>
        </>
    );
};
export default AdminHome;