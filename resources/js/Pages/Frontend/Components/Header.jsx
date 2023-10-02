import React, {Fragment} from 'react';
import Logo from "../../../assets/frontend/images/logo.svg"
import {Link,usePage} from "@inertiajs/react";

const Header = () => {
    const {url} = usePage()
    const { username } = usePage().props
    return (
        <Fragment>
            <div className="flex justify-between items-center my-container bg-[#e2136e] py-3 text-white">
                <div className="w-[250px] h-[30px]">
                    <Link href="/"><img src={Logo} alt="" className="w-full h-full"/></Link>
                </div>
                <div className="">
                    <p>{username}</p>
                </div>
                <ul className="flex gap-5">
                    <li className=""><Link href="/" className={`${url === '/' ? 'font-semibold text-indigo-300' : ''}`}>Home</Link></li>
                    <li className=""><Link href="/quiz" className={`${url === '/quiz' ? 'font-semibold text-indigo-300' : ''}`}>Quiz</Link></li>
                    <li className=""><Link href="/leader-board?query=value" className={`${url.startsWith('/leader-board')  ? 'font-semibold text-indigo-300' : ''}`}>Leader Board</Link></li>
                    <li className=""><Link href="/logout" method="post" >Logout</Link></li>
                </ul>
            </div>
        </Fragment>
    );
};

export default Header;
