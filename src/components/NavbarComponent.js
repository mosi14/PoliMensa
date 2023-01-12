import { Nav, Navbar} from "react-bootstrap";
import { FaHome, FaEuroSign } from 'react-icons/fa';
import { BsAlarm } from 'react-icons/bs';
import { TbToolsKitchen2 } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { useLocation } from 'react-router-dom';
import {useEffect} from "react";


function NavbarBottom() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Navbar bg="primary" variant="dark" fixed={'bottom'} className={'p-0'}>
            <Nav className={'m-auto'}>
                <Nav.Link href="/" active={ ['/'].includes(location.pathname) }>
                    <FaHome size={24}/>
                    <span>Home</span>
                </Nav.Link>
                <Nav.Link href="#features">
                    <BsAlarm size={24}/>
                    <span>Time</span>
                </Nav.Link>
                <Nav.Link href="#pricing">
                    <FaEuroSign size={24}/>
                    <span>Wallet</span>
                </Nav.Link>
                <Nav.Link href="#pricing">
                    <TbToolsKitchen2 size={24}/>
                    <span>Menu</span>
                </Nav.Link>
                <Nav.Link href="/profile">
                    <CgProfile size={24}/>
                    <span>Profile</span>
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavbarBottom;