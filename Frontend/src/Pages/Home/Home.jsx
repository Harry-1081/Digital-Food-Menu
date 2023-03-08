import './Home.css';
import { useStates } from '../../States';
import { useEffect } from 'react';
import { motion } from "framer-motion";
function Home() {
    const { getAllProducts,product } = useStates();

    useEffect(() => {
        getAllProducts();
        // eslint-disable-next-line
    },[]);
  
    return (
        <>
         <motion.div className="product-page">
           {product.map((product,i) => {
            return(
                <>
                <motion.div layout key={i} className="product-div">
                    {/* <span className='product-id'>{product.productId}</span> */}
                    {/* <img alt='edit button' className='edit-btn'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBqvw9fFq2uIc9H7kVCAz964W5Lw9CvK7BrQ&usqp=CAU'></img> */}
                    <img className='product-img' src={product.productUrl} alt=""></img>
                    <span className='product-name'><b>{product.productName}</b></span>
                    <span className='product-rate'><b>{product.productRate} ml </b></span>
                    <button className='product-shop'>{product.productShop}</button>
                </motion.div>
                </>
            )
        })}
        </motion.div>
        </>
    );
};
export default Home;