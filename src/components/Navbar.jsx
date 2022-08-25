import React from 'react';
import{Link} from 'react-router-dom'

const items = ["Home","About"]

const Navbar = () => {

    return (
        <div style={{textAlign:'center'}}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
    )
}

export default Navbar;
