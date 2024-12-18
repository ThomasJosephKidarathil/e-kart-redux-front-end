import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { removefromWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';


function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlistReducer);
  console.log('=== Wishlist items in wishlist page ===');
  console.log(wishlistItems);
  const dispatch = useDispatch()
  const handleWishlist=(item)=>{
    dispatch(addToCart(item))
    dispatch(removefromWishlist(item.id))
  }


  return (
    <>
      <button className='btn btn-warning mt-4 ms-4'>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
          <i class="fa-solid fa-arrow-left me-2"></i>
          Back To Home
        </Link></button>
      <Row className='m-5'>
        {
          wishlistItems?.length > 0 ?
            wishlistItems.map((item) => (
              <Col sm={12} md={6} lg={3} xl={3} className='m-3'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.image} height={'200px'} />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 20)}...</Card.Title>
                    <Card.Text>
                      <p>{item.description.slice(0, 50)} <span style={{ color: 'green' }}>... more</span></p>
                      <p className='fw-bolder'>Price : &#8377; {item.price}</p>
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button variant="outline-danger" onClick={() => dispatch(removefromWishlist(item.id))}><i class="fa-solid fa-trash fa-beat fa-xl" ></i></Button>
                      <Button variant="outline-success" onClick={()=>handleWishlist(item)}><i class="fa-solid fa-cart-shopping fa-shake fa-xl"></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
            :
            <div style={{height:'100vh'}} className='d-flex align-items-center flex-column'>
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png" 
              height='300px'alt="" />
              <h3 style={{color:'grey fw-bolder'}}>Your cart is Empty</h3>
            </div>
        }

      </Row>
    </>
  )
}

export default Wishlist