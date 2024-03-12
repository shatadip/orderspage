import React from 'react'
import './Orders.scss'
import { Tooltip, Button } from "@nextui-org/react";


const Orders = () => {
  return (
    <>
      <div className="orders-container">
        <h1 style={{'marginBottom':'2rem'}}>Your Orders</h1>
        <div className="order" id="order1">
          <div className="order-details">
            <img src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1710253430~exp=1710254030~hmac=0d6761f69fbe89de18e28bd138873a0a0dc87b67e0238a466c2dff3bf9f55126" alt="Product Image" className="product-image" />
            <div className="product-info">
              <h3>Product Name</h3>
              <p>Size: 8UK</p>
              <p>Mar 15, 2024 - Mar 20, 2024 (6 days)</p>
            </div>
            <div className="payment-details">
              <p>Price: ₹ 1,499</p>
              <p style={{ lineHeight: '1.25rem', color: '#008000' }}>Cash on Delivery</p>
            </div>
            <div className="delivery-details">
              <p className="lh0">Order ID: XXXX123YZZ</p>
              <p className="lh0">Date: Mar 11, 2024</p>
              <p><i className="green-dot"></i>Delivery by Mar 15, 2024</p>
              <div className="button-grid">
                <button className="button button1">Reschedule</button>
                <button className="button button2">Need Help?</button>
                <button className="button button3">Download PDF</button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10 pt45 pb20">
                <div className="row justify-content-between">
                  <div className="order-tracking completed">
                    <Tooltip
                      radius='lg'
                      classNames={{
                        base: [
                          // arrow color
                          "border-solid border-2 border-black",
                        ],
                        content: [
                          "py-2 px-4 shadow-xl",
                          "text-black bg-white",
                        ],
                      }}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-tiny">
                          <p><i className="green-dot-filled"></i>Order Recieved</p>
                          <p><i className="green-dot-filled"></i>KYC Verified</p>
                          <p><i className="green-dot-filled"></i>Order Confirmed</p>
                          
                          </div>
                        </div>
                      }
                    >
                      <span className="is-complete"></span>
                    </Tooltip>
                    <p><span>Order Placed</span></p>
                  </div>
                  <div className="order-tracking completed">
                  <Tooltip
                      radius='lg'
                      classNames={{
                        base: [
                          // arrow color
                          "border-solid border-2 border-black",
                        ],
                        content: [
                          "py-2 px-4 shadow-xl",
                          "text-black bg-white",
                        ],
                      }}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-tiny">
                          <p><i className="green-dot-filled"></i>Order Packed</p>
                          <p><i className="green-dot-filled"></i>Delivery Scheduled</p>
                          <p><i className="green-dot-filled"></i>Order Shipped</p>
                          
                          </div>
                        </div>
                      }
                    >
                    <span className="is-complete"></span>
                  </Tooltip>
                    <p><span>Shipment</span></p>
                  </div>
                  <div className="order-tracking">
                  <Tooltip
                      radius='lg'
                      classNames={{
                        base: [
                          // arrow color
                          "border-solid border-2 border-black",
                        ],
                        content: [
                          "py-2 px-4 shadow-xl",
                          "text-black bg-white",
                        ],
                      }}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-tiny">
                          <p><i className="green-dot"></i>Order Delivered</p>
                          
                          </div>
                        </div>
                      }
                    >
                    <span className="is-complete"></span>
                    </Tooltip>
                    <p><span>Delivery</span></p>
                  </div>
                  <div className="order-tracking">
                  <Tooltip
                      radius='lg'
                      classNames={{
                        base: [
                          // arrow color
                          "border-solid border-2 border-black",
                        ],
                        content: [
                          "py-2 px-4 shadow-xl",
                          "text-black bg-white",
                        ],
                      }}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-tiny">
                          <p><i className="green-dot"></i>Pickup Due</p>
                          <p><i className="green-dot"></i>Pickup Scheduled</p>
                          <p><i className="green-dot"></i>Return Received</p>
                          
                          </div>
                        </div>
                      }
                    >
                    <span className="is-complete"></span>
                    </Tooltip>
                    <p><span>Return</span></p>
                  </div>
                  <div className="order-tracking">
                  <Tooltip
                      radius='lg'
                      classNames={{
                        base: [
                          // arrow color
                          "border-solid border-2 border-black",
                        ],
                        content: [
                          "py-2 px-4 shadow-xl",
                          "text-black bg-white",
                        ],
                      }}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-tiny">
                          <p><i className="green-dot"></i>Quality Checked</p>
                          <p><i className="green-dot"></i>Refund Processed</p>
                          
                          </div>
                        </div>
                      }
                    >
                    <span className="is-complete"></span>
                    </Tooltip>
                    <p><span>Refund</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat the above div for each order */}
        <div className="order" id="order2">
          <div className="order-details">
            <img src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1710253430~exp=1710254030~hmac=0d6761f69fbe89de18e28bd138873a0a0dc87b67e0238a466c2dff3bf9f55126" alt="Product Image" className="product-image" />
            <div className="product-info">
              <h3>Product Name</h3>
              <p>Color: Black</p>
              <p>Mar 1, 2024 - Mar 7, 2024 (7 days)</p>
            </div>
            <div className="payment-details">
              <p>Price: ₹ 6,210</p>
              <p style={{ lineHeight: '1.25rem', color: '#008000' }}>Paid Online</p>
            </div>
            <div className="delivery-details">
              <p className="lh0">Order ID: XXXX110YZZ</p>
              <p className="lh0">Date: Feb 28, 2024</p>
              <p><i className="green-dot-filled"></i>Refund Processed</p>
              <div className="button-grid">
                <button className="button button1">Need Help?</button>
                <button className="button button2">Download PDF</button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10 pt45 pb20">
                <div className="row justify-content-between">
                  <div className="order-tracking completed">
                    <Tooltip
                      radius='lg'
                      classNames={{
                        base: [
                          // arrow color
                          "border-solid border-2 border-black",
                        ],
                        content: [
                          "py-2 px-4 shadow-xl",
                          "text-black bg-white",
                        ],
                      }}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-tiny">
                          <p><i className="green-dot-filled"></i>Order Recieved</p>
                          <p><i className="green-dot-filled"></i>KYC Verified</p>
                          <p><i className="green-dot-filled"></i>Order Confirmed</p>
                          
                          </div>
                        </div>
                      }
                    >
                      <span className="is-complete"></span>
                    </Tooltip>
                    <p><span>Order Placed</span></p>
                  </div>
                  <div className="order-tracking completed">
                  <Tooltip
                      radius='lg'
                      classNames={{
                        base: [
                          // arrow color
                          "border-solid border-2 border-black",
                        ],
                        content: [
                          "py-2 px-4 shadow-xl",
                          "text-black bg-white",
                        ],
                      }}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-tiny">
                          <p><i className="green-dot-filled"></i>Order Packed</p>
                          <p><i className="green-dot-filled"></i>Delivery Scheduled</p>
                          <p><i className="green-dot-filled"></i>Order Shipped</p>
                          
                          </div>
                        </div>
                      }
                    >
                    <span className="is-complete"></span>
                  </Tooltip>
                    <p><span>Shipment</span></p>
                  </div>
                  <div className="order-tracking completed">
                  <Tooltip
                      radius='lg'
                      classNames={{
                        base: [
                          // arrow color
                          "border-solid border-2 border-black",
                        ],
                        content: [
                          "py-2 px-4 shadow-xl",
                          "text-black bg-white",
                        ],
                      }}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-tiny">
                          <p><i className="green-dot-filled"></i>Order Delivered</p>
                          
                          </div>
                        </div>
                      }
                    >
                    <span className="is-complete"></span>
                    </Tooltip>
                    <p><span>Delivery</span></p>
                  </div>
                  <div className="order-tracking completed">
                  <Tooltip
                      radius='lg'
                      classNames={{
                        base: [
                          // arrow color
                          "border-solid border-2 border-black",
                        ],
                        content: [
                          "py-2 px-4 shadow-xl",
                          "text-black bg-white",
                        ],
                      }}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-tiny">
                          <p><i className="green-dot-filled"></i>Pickup Due</p>
                          <p><i className="green-dot-filled"></i>Pickup Scheduled</p>
                          <p><i className="green-dot-filled"></i>Return Received</p>
                          </div>
                        </div>
                      }
                    >
                    <span className="is-complete"></span>
                    </Tooltip>
                    <p><span>Return</span></p>
                  </div>
                  <div className="order-tracking completed">
                  <Tooltip
                      radius='lg'
                      classNames={{
                        base: [
                          // arrow color
                          "border-solid border-2 border-black",
                        ],
                        content: [
                          "py-2 px-4 shadow-xl",
                          "text-black bg-white",
                        ],
                      }}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-tiny">
                          <p><i className="green-dot-filled"></i>Quality Checked</p>
                          <p><i className="green-dot-filled"></i>Refund Processed</p>
                          
                          </div>
                        </div>
                      }
                    >
                    <span className="is-complete completed"></span>
                    </Tooltip>
                    <p><span>Refund</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat the above div for each order */}
      </div>

    </>
  )
}

export default Orders