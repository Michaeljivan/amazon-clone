import React from 'react';
import '../Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function Header(){
    return(
        <nav className={"header"}>
            {/* Logo on the left */}
            <Link to={"/"}>
                <img 
                    className={"header_logo"}
                    src={"http://pngimg.com/uploads/amazon/amazon_PNG11.png"}
                    alt={""}
                />
            </Link>
            
            {/* Search Box */}
            <div className={"header_search"}>
                <input type={"text"} className={"header_searchInput"}/>
                <SearchIcon className={"header_searchIcon"} />
            </div>

            {/* 3 links on the right */}
            <div className={"header_nav"}>
                {/* First Link */}
                <Link to={"/login"} className={"header_link"}>
                    <div className={"header_option"}>
                        <span className={"header_optionLineOne"}>Hello Mikey</span>
                        <span className={"header_optionLineTwo"}>Sign in</span>
                    </div>
                </Link>
                {/* Second Link */}
                <Link to={"/checkout"} className={"header_link"}>
                    <div className={"header_option"}>
                        <span className={"header_optionLineOne"}>Returns</span>
                        <span className={"header_optionLineTwo"}>& Orders</span>
                    </div>
                </Link>
                {/* Third Link */}
                <Link to={"/"} className={"header_link"}>
                    <div className={"header_option"}>
                        <span className={"header_optionLineOne"}>Try</span>
                        <span className={"header_optionLineTwo"}>Prime</span>
                    </div>
                </Link>
                {/* Fourth Link */}
                <Link to={"/"} className={"header_link"}>
                    <div className={"header_option"}>
                        <span className={"header_optionLineOne"}>Cart</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;