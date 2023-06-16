import './Navbar.css';
import { useStates } from "../../States";
import { useEffect } from 'react';
import { FormControl,Select,MenuItem } from '@mui/material'

function Navbar() {
    const { setSearchvalue,getAllProducts,searchvalue,sortvalue,setSortvalue,} = useStates();
    
    useEffect(() => {
        getAllProducts();
        // eslint-disable-next-line
    },[sortvalue]);

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

                        <li>
                        <div className='editsort-div'>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Select
                                className='editsort-in'
                                value={sortvalue}
                                autoWidth
                                defaultValue='all'
                                onChange={(e) => setSortvalue(e.target.value)}
                                >
                                <MenuItem value={"all"}>Default</MenuItem>
                                <MenuItem value={"asc"}>Price :  Low to High</MenuItem>
                                <MenuItem value={"desc"}>Price : High to low</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                        </li>

                    </ul>
                </div>

            </div>
        </>
    );
};
export default Navbar;