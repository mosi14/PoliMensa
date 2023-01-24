import {Col, Nav, Navbar, Row} from "react-bootstrap";
import { FaHome, FaEuroSign } from 'react-icons/fa';
import { BsAlarm } from 'react-icons/bs';
import { TbToolsKitchen2 } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { useLocation } from 'react-router-dom';
import React, {useEffect} from "react";
import {GiKnifeFork} from "react-icons/gi";
import {RiMoneyEuroCircleLine} from "react-icons/ri";


function NavbarBottom() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Navbar variant="dark" fixed={'bottom'} className={'p-0 bg-main'}>
            <Nav className={'m-auto'}>
                <Nav.Link href="/order/choose-time/queue-number" active={ ['/choose-time/queue-number'].includes(location.pathname)}>
                    <BsAlarm size={24}/>
                    <span>Time</span>
                </Nav.Link>
                <Nav.Link href="/top-up" active={ ['/top-up'].includes(location.pathname)}>
                    <FaEuroSign size={24}/>
                    <span>Wallet</span>
                </Nav.Link>
                <Nav.Link href="/" active={ ['/'].includes(location.pathname) }>
                    <FaHome size={24}/>
                    <span>Home</span>
                </Nav.Link>
                <Nav.Link href="/menu" active={ ['/menu'].includes(location.pathname) }>
                    <TbToolsKitchen2 size={24}/>
                    <span>Menu</span>
                </Nav.Link>
                <Nav.Link href="/profile" active={ ['/profile'].includes(location.pathname) }>
                    <CgProfile size={24}/>
                    <span>Profile</span>
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}

export function TopNavbar(props) {
    return (
        <Row className={'bg-main py-3 px-1 w-100 top-navbar-ml-0'}>
            <Col>
                <div className={'d-flex align-items-center'}>
                    <GiKnifeFork className={'me-2'} size={30}/>
                    <div className={'h5 mb-0'}>
                        PoliMensa
                    </div>
                </div>
            </Col>
            <Col>
                <span className={'float-end'}>
                    <div className={'d-flex align-items-center'}>
                        <RiMoneyEuroCircleLine size={25} />
                        <h6 className={'mb-0'}>{ props.user.money }</h6>
                    </div>
                </span>
            </Col>
        </Row>
    );
}

export default NavbarBottom;