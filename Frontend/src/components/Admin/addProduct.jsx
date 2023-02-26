import './addProduct.css'
import { useStates } from '../../States';
import { useState } from 'react';

function Addproduct() {
  const [value,setValue] = useState();

  return (
    <>
      <div className='add-page'>
          <div className='add-box'>

            <div className='add-div'>
              <span className='add-text'><b>Add New Product</b></span>
            </div>

            <div className='prodname-div'>
              <span className='prodname-text'>Product Name</span>
              <input className='prodname-in' type='text' placeholder='Product Name' required
              // onChange={(e) => setUsername(e.target.value)}
              ></input>
              {/* {unerror && <span className='unerror-text'><b>{unerror}</b></span>} */}
            </div>

            <div className='prodrate-div'>
              <span className='prodrate-text'>Product Price</span>
              <input className='prodrate-in' type='text' placeholder='Product Price' required
              // onChange={(e) => setUsername(e.target.value)}
              ></input>
              {/* {unerror && <span className='unerror-text'><b>{unerror}</b></span>} */}
            </div>

            <div className='produrl-div'>
              <span className='produrl-text'>Product Image (Enter the link to the image)</span>
              <input className='produrl-in' type='text' placeholder='Product URL' required
              // onChange={(e) => setUsername(e.target.value)}
              ></input>
              {/* {unerror && <span className='unerror-text'><b>{unerror}</b></span>} */}
            </div>

            <div className='prodcategory-div'>
              <span className='prodcategory-text'>Product Category</span>
              <select className="prodcategory-in">
                <option value="snacks"><b>Snacks</b></option>
                <option value="packaged"><b>Packaged Food</b></option>
                <option value="dairy"><b>Dairy</b></option>
                <option value="fruits"><b>Fruits</b></option>
               </select>
              {/* {unerror && <span className='unerror-text'><b>{unerror}</b></span>} */}
            </div>

            <div className='addprod-div'>
              <button className='addprod-btn'>Add Product</button>
            </div>

           </div> 
        </div>
    </>
  );
};
export default Addproduct;
