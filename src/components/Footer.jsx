import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div style={{ width: '100%', height: '300px', backgroundColor: 'black', color: "red" }}
                className='d-flex justify-content-center align-items-center flex-column mt-5 '>
                <div className='d-flex justify-content-evenly align-items-center mt-5 mb-5 w-100' >
                    <div style={{ width: '400px', color: 'red' }}>
                        <h4 style={{ color: 'red', fontSize: '40px' }}><i class="fa-solid fa-cart-shopping fa-shake fa-sm" ></i>e-Kart</h4>
                        <h6 className='mt-5 d-flex' style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at nisi ducimus quidem voluptate,
                            dolorem, accusantium ex consequuntur earum excepturi error officia hic odit. Fuga cumque eius cupiditate
                            nesciunt eum? </h6>
                    </div>
                    <div className='d-flex flex-column'>
                        <h4>Links</h4>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                        <Link to='/cart' style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>
                        <Link to='/wishlist' style={{ textDecoration: 'none', color: 'white' }}>Wishlist</Link>
                    </div>
                    <div className='d-flex flex-column'>
                        <h4>Guides</h4>
                        <Link to={'https://react.dev/'} target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React</Link>
                        <Link to={'https://react-bootstrap.netlify.app/'} target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
                        <Link to={'https://bootswatch.com/'} target='_blank' style={{ textDecoration: 'none', color: 'white' }}>Boots Watch</Link>
                    </div>
                    <div className='d-flex flex-column'>
                        <h4>Contact Us</h4>
                        <div className='d-flex'>
                            <input type="text" className='form-control' placeholder='Enter email id' />
                            <button className='btn btn-warning ms-2'>Subscribe</button>
                        </div>
                        <div className='d-flex justify-content-evenly align-items-center mt-3'>
                            <Link to='https://x.com/i/flow/login' target='_blank' style={{ textDecoration: 'none', color: 'red' }}><i class="fa-solid fa-x fa-bounce fa-xl "></i></Link>
                            <Link to='https://www.instagram.com/accounts/login/?hl=en' target='_blank' style={{ textDecoration: 'none', color: 'red' }}><i class="fa-brands fa-instagram fa-bounce fa-xl"></i></Link>
                            <Link to='https://www.reddit.com/?rdt=60602' target='_blank' style={{ textDecoration: 'none', color: 'red' }}><i class="fa-brands fa-reddit fa-bounce fa-xl"></i></Link>
                            <Link to='https://www.facebook.com/login.php/' target='_blank' style={{ textDecoration: 'none', color: 'red' }}><i class="fa-brands fa-facebook fa-bounce fa-xl"></i></Link>
                            <Link to='https://www.whatsapp.com/' target='_blank' style={{ textDecoration: 'none', color: 'red' }}><i class="fa-brands fa-whatsapp fa-bounce fa-xl"></i></Link>
                            <Link to='https://www.threads.net/login' target='_blank' style={{ textDecoration: 'none', color: 'red' }}><i class="fa-brands fa-threads fa-bounce fa-xl"></i></Link>
                            <Link to='https://mail.google.com/' target='_blank' style={{ textDecoration: 'none', color: 'red' }}><i class="fa-regular fa-envelope fa-bounce fa-xl"></i></Link>

                        </div>
                    </div>
                </div>
                <p className='mb-5' style={{ color: 'white' }}>Copyright  &#169;2024 e-Kart built with React Redux</p>
            </div>
        </>
    )
}

export default Footer