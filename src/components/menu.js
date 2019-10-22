import React from 'react';
import { Link } from 'gatsby';

const Menu = ()=>(
    <div>
        <ul 
        style={{
            display: 'flex',
            listStyle: 'none',
            justifyContent: 'space-evenly'
        }}>
            <li>
                <Link to='page-2'>page2</Link>
            </li>
            <li>
                <Link to='about'>About Us</Link>
            </li>
            <li>
                <Link to='blog'>Blog</Link>
            </li>
        </ul>
    </div>
)
export default Menu;