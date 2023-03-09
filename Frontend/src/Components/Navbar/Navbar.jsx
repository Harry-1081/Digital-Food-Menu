import './Navbar.css';
import { useStates } from "../../States";
import { useEffect } from 'react';

function Navbar() {
    const { setSearchvalue,getAllProducts,searchvalue } = useStates();
    
    useEffect(() => {
        getAllProducts();
        // eslint-disable-next-line
    },[searchvalue]);
    
    return (
        <>
            <div className='navbar-page'>

                <div className='navbar-div'>
                    <ul>
                        <li>
                        <img src='https://res.cloudinary.com/dnq6fx1oj/image/upload/v1678257168/logo-no-background_xwveo4.png' alt='' className='nav-logo'></img>
                        </li>

                        <li>
                        <input className='nav-searchbar' type='text' placeholder=' 🔍 Search items'
                        onChange={(e) => setSearchvalue(e.target.value)}
                        ></input>
                        </li>

                    </ul>
                </div>

            </div>
        </>
    );
};
export default Navbar;