import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addtoWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Home() {
  const response = useFetch('https://fakestoreapi.com/products')
  console.log("=== All Data ===");
  console.log(response);
  const dispatch = useDispatch();

  return (
    < >
      <Row className='m-5'>
        {
          response?.length > 0 ?
            response.map((item) => (
              <Col sm={12} md={6} lg={4} xl={3} className='m-3'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.image} height={'200px'} />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 20)}...</Card.Title>
                    <Card.Text>
                      <p>{item.description.slice(0, 50)} <span style={{ color: 'green' }}>... more</span></p>
                      <p className='fw-bolder'>Price : &#8377; {item.price}</p>
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button variant="outline-danger" onClick={() => dispatch(addtoWishlist(item))}>
                        <i class="fa-solid fa-heart fa-beat fa-xl" ></i>
                      </Button>
                      <Button variant="outline-success" onClick={() => dispatch(addToCart(item))}>
                        <i class="fa-solid fa-cart-shopping fa-shake fa-xl"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
            :
            <div>
              <p>No Items Found</p>
            </div>
        }

      </Row>
    </>
  )
}

export default Home