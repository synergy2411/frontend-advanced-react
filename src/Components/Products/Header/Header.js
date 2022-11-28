import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container text-center m-3'>
            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <NavLink className="nav-link" to="/product-list">Product List</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className="nav-link" to="/add-product">Add Product</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Header;
