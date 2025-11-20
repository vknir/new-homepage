import { useState } from "react";
import Logo from '../assets/images/logo.svg'
import Close from '../assets/images/icon-menu-close.svg'
import Menu from '../assets/images/icon-menu.svg'

type NavbarProps = {
    screenWidth: number
}

function Navbar(props: NavbarProps) {

    const [displayMobileMenu, setDisplayMobileMenu] = useState<boolean>(false)
    const [renderComponent, setRenderComponent] = useState<boolean>(false)

    const handleClick = () => {
        if (!renderComponent) {
            setRenderComponent(true)
        }
        setDisplayMobileMenu(true)
    }


    return <div className="flex justify-between items-center fixed bg-off-white inset-x-0 top-0 px-6 pt-4 pb-2 md:px-48 md:py-4   ">
        <img className="h-8" src={Logo} alt="logo" />

        {props.screenWidth >= 768 ?
            <nav className="flex items-center gap-8">
                <a className="style-a" href="#">Home</a>
                <a className="style-a" href="#">New</a>
                <a className="style-a" href="#">Trending</a>
                <a className="style-a" href="#">Popular</a>
                <a className="style-a" href="#">Categories</a>
            </nav>
            :
            <>
                <img className="h-4" onClick={() =>handleClick()} src={Menu} alt="Menu-icon" />
                {renderComponent &&
                    <>
                        <div className={`absolute top-0 bg-very-dark-blue h-screen w-[35%] opacity-20 ${displayMobileMenu ? 'animate-slide-left-in left-0' : 'animate-slide-left-out -left-full'}   `}></div>
                        <div className={`absolute top-0 w-[65%] h-screen gap-20 flex flex-col bg-off-white p-6 ${displayMobileMenu ? ' animate-slide-right-in right-0 ' : 'animate-slide-right-out right-full'}  `}>
                            <img className="size-7 self-end" onClick={() => setDisplayMobileMenu(false)} src={Close} alt="close-icon" />
                            <nav className="flex flex-col gap-6 text-lg font-medium ">
                                <a className="style-a" href="#">Home</a>
                                <a className="style-a" href="#">New</a>
                                <a className="style-a" href="#">Trending</a>
                                <a className="style-a" href="#">Popular</a>
                                <a className="style-a" href="#">Categories</a>
                            </nav>
                        </div>
                    </>
                }
            </>
        }
    </div>
}

export default Navbar;