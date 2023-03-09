import './EditProduct.css'
import { TextField,FormControl,InputLabel,Select,MenuItem } from '@mui/material'
import { useStates } from '../States';
import { RiDeleteBinLine } from 'react-icons/ri'
import axios from '../axios';
import { useEffect, useState } from 'react';

const EditProduct = ({ show }) => {
    const { getAllProducts,editproduct } = useStates();

    const [prodid, setProdid] = useState("");
    const [prodname, setProdname] = useState("");
    const [prodrate, setProdrate] = useState("");
    const [produrl, setProdurl] = useState("");
    const [prodshop, setProdshop] = useState("");

    useEffect(() => {
      setProdid(editproduct?.productId)
      setProdname(editproduct?.productName)
      setProdrate(editproduct?.productRate)
      setProdurl(editproduct?.productUrl)
      setProdshop(editproduct?.productShop)
    }, [editproduct]);

    const editfromDB = () => {
      const prodeditDetails = {
        productName:prodname,
        productRate:prodrate,
        productUrl:produrl,
        productShop:prodshop
      }
      axios.put(`/product/edit/${prodid}`,prodeditDetails)
      .then((response)=>{
        console.log(response);
        getAllProducts();
      });
  };

  
  return (
    <>
     <div className='edit-page'>
          <div className='edit-box'>

            <div className='edit-div'>
              <span className='edit-text'><b>Edit Product</b></span>
            </div>

            <form onSubmit={()=> show(false)}>
            <div className='canceleditprod-div'>
              <button  className='canceleditprod-btn'><b><RiDeleteBinLine/></b></button>
            </div>
            </form>

            <form onSubmit={()=> show(false)}>
            <div className='editprodname-div'>
            <TextField className='editprodname-in' label="Product Name" variant="standard" value={prodname}
              onChange={(e) => setProdname(e.target.value)}/>
            </div>

            <div className='editprodrate-div'>
            <TextField className='editprodrate-in' label="Product Rate" type='number' variant="standard" value={prodrate}
              onChange={(e) => setProdrate(e.target.value)}/>
            </div>

            <div className='editprodurl-div'>
            <TextField className='editprodurl-in'  label="Product URL" variant="standard" value={produrl}
              onChange={(e) => setProdurl(e.target.value)}/>
            </div>

            <div className='editprodshop-div'>
            <FormControl variant='standard' fullWidth required>
              <InputLabel>Shop Name</InputLabel>
              <Select
                className='editprodshop-in'
                label="Age"
                value={prodshop}
                onChange={(e) => setProdshop(e.target.value)}
              >
                <MenuItem value={"Aroma"}>Aroma</MenuItem>
                <MenuItem value={"Broken Eggs"}>Broken Eggs</MenuItem>
                <MenuItem value={"SPN Chats"}>SPN Chats</MenuItem>
                <MenuItem value={"Thatha Kadai"}>Thatha Kadai</MenuItem>
                <MenuItem value={"Cravy's House"}>Cravy's House</MenuItem>
              </Select>
            </FormControl>
            </div>

            <div className='editprod-div'>
              <button className='editprod-btn' onClick={editfromDB}>Update Product</button>
            </div>
            </form>
           </div> 
        </div>
    </>
  );
};
export default EditProduct; 
