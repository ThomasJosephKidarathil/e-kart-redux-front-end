import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {
    // useSelector hook is used to access state available in store
    const wishlist = useSelector((state) => state.wishlistReducer)
    console.log('=== wishlist ===');
    console.log(wishlist);
    const cart = useSelector((state) => state.cartReducer)

    return (
        <>
            <Navbar expand="lg" className="bg-black">
                <Container>
                    <i class="fa-solid fa-cart-shopping fa-shake fa-2xl" style={{ color: "red", fontSize: '50px' }}></i>
                    <Navbar.Brand >
                        <Link to={'/'} style={{ color: 'red', textDecoration: 'none', fontSize: '50px' }}>
                            e-Kart
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link >
                                <Link to={'/cart'} style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}>
                                    Cart
                                    <Badge bg="grey" className='ms-1 fs-6' style={{ color: 'red' }}>{cart?.length}</Badge>
                                </Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to={'/wishlist'} style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}>
                                    Wishlist
                                    <Badge bg='grey' className='ms-1 fs-6' style={{ color: 'red' }}>{wishlist?.length}</Badge>
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header