import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/cartSlice';

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch()
  // hook is used to navigate to a particular path or page
  const navigate = useNavigate()
  const [total, setTotal] = useState(0)
  const getTotal = () => {
    let sum = 0;
    cartArray.forEach((item) => {
      sum = sum + item.price;
    })
    setTotal(sum)
  }
  const handleCart = () => {
    alert("Thank You... 😜 Your order Placed successfully 😁");
    dispatch(emptyCart());
    navigate('/')
  }

  useEffect(() => {
    getTotal();
  }, [cartArray])

  return (
    <>
      <button className='btn btn-warning mt-4 ms-4'>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
          <i class="fa-solid fa-arrow-left me-2"></i>
          Back To Home
        </Link></button>
      <div style={{ marginTop: '100px' }}>

        {
          cartArray?.length > 0 ?
            <div className='row w-100'>
              <div className='col-lg-6 m-5'>
                <table className='table shadow border'>
                  <thead>
                    <th>#</th>
                    <th>Product Title</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                  </thead>
                  <tbody>
                    {
                      cartArray?.map((item, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.title}</td>
                          <td><img src={item.image} alt="" height='75' width="75" /></td>
                          <td>₹{item.price}</td>
                          <td><button variant="outline-danger" onClick={() => { dispatch(removeFromCart(item.id)) }}><i class="fa-solid fa-trash"></i></button></td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>
              </div>
              <div className='col-lg-4'>
                <div className='border shadow p-5'>
                  <h4 className='text-Grey'>Cart Summary</h4><br />
                  <h5>Total Number of Products : <span className='text-danger fw-bolder'> {cartArray?.length}</span></h5>
                  <h5>Total Price : <span className='text-danger fw-bolder'>₹ {total}</span></h5><br />
                  <button className='btn btn-success rounded' onClick={handleCart}>CHECKOUT</button>
                </div>
              </div>
            </div>
            :
            <div style={{ height: '100vh' }} className='d-flex align-items-center flex-column'>
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png"
                height='300px' alt="" />
              <h3 style={{ color: 'grey fw-bolder' }}>Your cart is Empty</h3>
            </div>
        }


      </div>
    </>
  )
}

export default Cart