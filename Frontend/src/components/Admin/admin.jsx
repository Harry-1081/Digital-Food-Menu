import '../Home/Home.css';
import { useStates } from '../../States';
import { useEffect } from 'react';
import { motion } from "framer-motion";
import { MdAddBox } from "react-icons/md"
import { Link } from 'react-router-dom';
function AdminHome() {
    const { getAllProducts,product,deletefromDB } = useStates();

    useEffect(() => {
        getAllProducts();
        // eslint-disable-next-line
    },[]);
  
    return (
        <>
         <motion.div className="product-page">
            <span className='addpage-link'>
             <Link to="/admin/add">
              <MdAddBox/>  
             </Link> 
            </span>
           {product.map((product,i) => {
            return(
                <>
                <motion.div layout key={i} className="admin-div">
                    <img alt='edit button' className='edit-btn'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBqvw9fFq2uIc9H7kVCAz964W5Lw9CvK7BrQ&usqp=CAU'></img>
                    <img alt='delete button' className='delete-btn' 
                    onClick={function (e) 
                        {
                        deletefromDB(product.productId) 
                        }}
                    src='https://www.seekpng.com/png/detail/202-2022743_edit-delete-icon-png-download-delete-icon-png.png'></img>
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