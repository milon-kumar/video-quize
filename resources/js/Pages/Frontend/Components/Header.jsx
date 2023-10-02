import React, {Fragment} from 'react';
import Logo from "../../../assets/frontend/images/logo.svg"
import {Link} from "@inertiajs/react";

const Header = () => {
    return (
        <Fragment>

                <div className="flex justify-between items-center my-container bg-[#e2136e] py-3 text-white">
                    <div className="w-[250px] h-[30px]">
                        <Link href="/"><img src={Logo} alt="" className="w-full h-full"/></Link>
                    </div>
                    <ul className="flex gap-5">
                        <li className=""><Link href="/" className="font-semibold">Home</Link></li>
                        <li className=""><Link href="/quiz" className="font-semibold">Quiz</Link></li>
                        <li className=""><Link href="leader-board" className="font-semibold">Leader Board</Link></li>
                        <li className=""><a href="/" className="font-semibold">Login</a></li>
                    </ul>
                </div>
        </Fragment>
    );
};

export default Header;
