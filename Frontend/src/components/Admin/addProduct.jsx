import './AddProduct.css'
import { useStates } from '../../States';

function Addproduct() {
  // var e = document.getElementsByClassName("prodcategory-in");
  //  function onChange() {
  //   var value = e.value;
  //   var text = e.options[e.selectedIndex].text;
  //   setProdcategory(text);
  // }
  // e.onchange = onChange;
  // onChange();

  const { setProdname,setProdrate,setProdurl,SendtoprodDB,setProdcategory } = useStates();
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
              onChange={(e) => setProdname(e.target.value)}
              ></input>
              {/* {unerror && <span className='unerror-text'><b>{unerror}</b></span>} */}
            </div>

            <div className='prodrate-div'>
              <span className='prodrate-text'>Product Price</span>
              <input className='prodrate-in' type='number' placeholder='Product Price' required
              onChange={(e) => setProdrate(e.target.value)}
              ></input>
              {/* {unerror && <span className='unerror-text'><b>{unerror}</b></span>} */}
            </div>

            <div className='produrl-div'>
              <span className='produrl-text'>Product Image (Enter the link to the image)</span>
              <input className='produrl-in' type='text' placeholder='Product URL' required
              onChange={(e) => setProdurl(e.target.value)}
              ></input>
              {/* {unerror && <span className='unerror-text'><b>{unerror}</b></span>} */}
            </div>

            <div className='prodcategory-div'>
              <span className='prodcategory-text'>Product Category</span>
              <input className='prodcategory-in' type='text' placeholder='Product Category' required
              onChange={(e) => setProdcategory(e.target.value)}></input>
              {/* {unerror && <span className='unerror-text'><b>{unerror}</b></span>} */}
            </div>

            <div className='addprod-div'>
              <button className='addprod-btn' onClick={SendtoprodDB}>Add Product</button>
            </div>

           </div> 
        </div>
    </>
  );
};
export default Addproduct;
