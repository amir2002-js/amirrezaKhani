import {
    PiMagnifyingGlass,
    PiShoppingCartSimpleBold,
    PiUserCircleBold,
} from 'react-icons/pi';
import Form from './Form';
import ToggleMenu from './ToggleMenu';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import Menu from './Menu';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

export default function Navbar() {
    // manage the close and open menu
    const [showMenu, setShowMenu] = useState(false);

    // manage remove side menu from the dom
    const [isVisible, setIsVisible] = useState(false);

    function changeMenuState() {
        if (isVisible) {
            setShowMenu((prev) => !prev);

            setTimeout(() => {
                setIsVisible((prev) => !prev);
            }, 300);
        } else {
            setIsVisible((prev) => !prev);

            setTimeout(() => {
                setShowMenu((prev) => !prev);
            }, 0);
        }
    }

    return (
        <>
            <div className="z-40 py-6 flex flex-col justify-center items-center gap-7">
                <section className="flex gap-10 max-sm:gap-5 items-center w-full ">
                    <div className="flex gap-3.5">
                        <ToggleMenu
                            changeMenuState={
                                changeMenuState
                            }
                        />

                        {/* logo */}
                        <Logo />
                    </div>

                    {/* navbar links */}
                    <div className="max-lg:hidden">
                        <Menu />
                    </div>

                    {/* search part */}
                    <div className="grow">
                        <div className="w-full max-sm:hidden">
                            <Form />
                        </div>
                    </div>

                    {/* icons */}
                    <ul className="flex items-center gap-4">
                        <li>
                            <button className="hover:bg-primary-gray p-2 rounded-[50%]">
                                <Link to={'/basket'}>
                                    <PiShoppingCartSimpleBold className="text-xl" />
                                </Link>
                            </button>
                        </li>
                        <li>
                            <button className="hover:bg-primary-gray p-2 rounded-[50%]">
                                <PiUserCircleBold className="text-xl" />
                            </button>
                        </li>
                    </ul>
                </section>
                <div className="sm:hidden w-full">
                    <Form />
                </div>
            </div>

            {/* side menu */}
            <MobileMenu
                showMenu={showMenu}
                isVisible={isVisible}
                changeMenuState={changeMenuState}
            />
        </>
    );
}
