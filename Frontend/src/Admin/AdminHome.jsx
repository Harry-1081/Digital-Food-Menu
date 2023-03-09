import '../Pages/Home/Home.css';
import { useStates } from '../States';
import { useEffect } from 'react';
import { motion } from "framer-motion";
import { MdAddBox,MdEdit } from "react-icons/md"
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Tooltip } from '@mui/material';

function AdminHome() {
    const { getAllProducts,product,deletefromDB,addprod,setaddprod,editprod,seteditprod,seteditProduct } = useStates();

    useEffect(() => {
        getAllProducts();
        // eslint-disable-next-line
    },[]);

    const geteditdata = (product) => {
        fetch(`http://localhost:1403/product/getbyid/${product.productId}`)
        .then((res) => res.json())
        .then((result) => {
            seteditProduct(result);
            console.log(result);
        });
    };
  
    return (
        <>
         <motion.div className="product-page">
            
            <button  className='addpage-linkbtn' onClick={() => setaddprod(true)}>
              <span className='addpage-link'><MdAddBox/></span>
             {addprod && <AddProduct show={setaddprod}/>}
            </button>
             {editprod && <EditProduct show={seteditprod}/>}
             
           {product.map((product,i) => {
            return(
                <>
                <motion.div layout key={i} className="admin-div">

                <Tooltip title="Edit"  placement="right" arrow>
                    <button className='edit-btn' 
                    onClick={()=> {
                        seteditprod(true)
                        geteditdata(product)
                    }}>
                        <MdEdit/></button>
                </Tooltip>
                
                <Tooltip title="delete"  placement="bottom" arrow>
                    <button className='delete-btn' onClick={() =>{deletefromDB(product.productId)}}
                    ><RiDeleteBinLine/></button>
                </Tooltip>

                    <img className='product-img' src={product.productUrl} alt=""></img>
                    <span className='product-name'><b>{product.productName}</b></span>
                    <span className='product-rate'><b>{product.productRate}.00 </b></span>
                    <button className='product-shop'>{product.productShop}</button>
                </motion.div>
                </>
            )
        })}
        </motion.div>
        </>
    );
};
export default AdminHome;