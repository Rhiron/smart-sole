import React, { useState } from 'react';
import { useShoppingCart } from './ShoppingCartContext';
import '../Styling/Checkout.css';

const Checkout = () => {
    const { cartItems, clearCart } = useShoppingCart();
    const [customer, setCustomer] = useState({});
    const [isShippingOpen, setShippingOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isBillingSameAsShipping, setIsBillingSameAsShipping] = useState(true);


    const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleBillingToggleChange = (event) => {
    setIsBillingSameAsShipping(event.target.checked);
  };
  

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomer(prevCustomer => ({
            ...prevCustomer,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Customer Info:', customer);
        console.log('Cart Items:', cartItems);
        alert('Thank you for your order!');
       
        clearCart();
    };

    return (
        <div>
        <h2 className='page-head'>Checkout</h2>
        <div className='checkout-container'>
            
            <div className='info-block'>
                <div className='shipping-block'>
                <h2 onClick={() => setShippingOpen(!isShippingOpen)}className='section-heading'>Shipping</h2>{isShippingOpen && (
                <div>

                    <form onSubmit={handleSubmit} className='shipping-form'>

                        <label htmlFor='email'>Email <span className='required-star'>*</span></label>
                        <br/>
                        <input
                        style={{width:'calc(100% - 8px', margin:'1px'}}
                        id='email'
                        name='email'
                        type='email'
                        value={customer.email}
                        onChange={handleInputChange}
                        required
                        />
                        <br/>
                        <input
                        id='spam' 
                        name='spam'
                        type='checkbox'
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        />
                        <label htmlFor='spam'> Do you want your email spammed till you can't find the emails you actually need to see?</label>
                        <br/>
                        <h2>Shipping Address</h2>
                        <br/>
                        <label htmlFor='countryShip'>Country <span className='required-star'>*</span></label>
                        <br/>
                        <input
                        style={{width:'calc(100% - 8px', margin:'1px'}}
                        id='countryShip'
                        name='countryShip'
                        type='text'
                        value={customer.countryShip}
                        onChange={handleInputChange}
                        required
                        />
                        <label htmlFor='fNameShip'>First Name <span className='required-star'>*</span></label>

                        <label htmlFor='lNameShip' style={{marginLeft: "calc(50% - 86px)"}}>Last Name <span className='required-star'>*</span></label>
                        <br/>
                        <input
                        style={{width:'calc(50% - 14px)', margin: '1px'}}
                        id='fNameShip'
                        name='fNameShip'
                        type='text'
                        value={customer.fNameShip}
                        onChange={handleInputChange}
                        required
                        />
                        <input
                        style={{width:'calc(50% - 14px)', margin: '5px'}}
                        id='lNameShip'
                        name='lNameShip'
                        type='text'
                        value={customer.lNameShip}
                        onChange={handleInputChange}
                        required
                        />
                        <br/>
                        <label htmlFor='AddressShip'>Address <span className='required-star'>*</span></label>
                        <br/>
                        <input
                        style={{width:'calc(100% - 8px', margin:'1px'}}
                        id='AddressShip'
                        name='AddressShip'
                        type='text'
                        value={customer.AddressShip}
                        onChange={handleInputChange}
                        required
                        />
                        <label htmlFor='cityShip'>City <span className='required-star'>*</span></label>
                        <br/>
                        <input
                        style={{width:'calc(100% - 8px', margin:'1px'}}
                        id='cityShip'
                        name='cityShip'
                        type='text'
                        value={customer.cityShip}
                        onChange={handleInputChange}
                        required
                        />
                        <label htmlFor='ProvShip'>Province <span className='required-star'>*</span></label>

                        <label htmlFor='ZIPShip' style={{marginLeft: "calc(50% - 68px)"}}>ZIP <span className='required-star'>*</span></label>
                        <br/>
                        <input
                        style={{width:'calc(50% - 14px)', margin: '1px'}}
                        id='ProvShip'
                        name='ProvShip'
                        type='text'
                        value={customer.ProvShip}
                        onChange={handleInputChange}
                        required
                        />
                        <input
                        style={{width:'calc(50% - 14px)', margin: '5px'}}
                        id='ZIPShip'
                        name='ZIPShip'
                        type='text'
                        value={customer.ZIPShip}
                        onChange={handleInputChange}
                        required
                        />
                        <br/>
                        <label htmlFor='companyShip'>Company</label>
                        <br/>
                        <input
                        style={{width:'calc(100% - 8px', margin:'1px'}}
                        id='companyShip'
                        name='companyShip'
                        type='text'
                        value={customer.companyShip}
                        onChange={handleInputChange}
                        />
                        <label htmlFor='phoneShip'>Phone Number <span className='required-star'>*</span></label>
                        <br/>
                        <input
                        style={{ width: 'calc(100% - 8px)', margin: '1px' }}
                        id='phoneShip'
                        name='phoneShip'
                        type='tel'
                        pattern='\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}'
                        value={customer.phoneShip}
                        onChange={handleInputChange}
                        required
                        />
                        <br/>
                        <h2>Billing Address</h2>


                        <input
                        id='billingToggle' 
                        name='billingToggle'
                        type='checkbox'
                        checked={isBillingSameAsShipping}
                        onChange={handleBillingToggleChange}
                        />
                        <label htmlFor='billingToggle'> Same as Shipping Address</label>


                        {!isBillingSameAsShipping && (
                        <div className='BillingAddress'>
                            <label htmlFor='countryBill'>Country <span className='required-star'>*</span></label>
                        <br/>
                        <input
                        style={{width:'calc(100% - 8px', margin:'1px'}}
                        id='countryBill'
                        name='countryBill'
                        type='text'
                        value={customer.countryBill}
                        onChange={handleInputChange}
                        required
                        />
                        <label htmlFor='fNameBill'>First Name <span className='required-star'>*</span></label>

                        <label htmlFor='lNameBill' style={{marginLeft: "calc(50% - 86px)"}}>Last Name <span className='required-star'>*</span></label>
                        <br/>
                        <input
                        style={{width:'calc(50% - 14px)', margin: '1px'}}
                        id='fNameBill'
                        name='fNameBill'
                        type='text'
                        value={customer.fNameBill}
                        onChange={handleInputChange}
                        required
                        />
                        <input
                        style={{width:'calc(50% - 14px)', margin: '5px'}}
                        id='lNameBill'
                        name='lNameBill'
                        type='text'
                        value={customer.lNameBill}
                        onChange={handleInputChange}
                        required
                        />
                        <br/>
                        <label htmlFor='AddressBill'>Address <span className='required-star'>*</span></label>
                        <br/>
                        <input
                        style={{width:'calc(100% - 8px', margin:'1px'}}
                        id='AddressBill'
                        name='AddressBill'
                        type='text'
                        value={customer.AddressBill}
                        onChange={handleInputChange}
                        required
                        />
                        <label htmlFor='cityBill'>City <span className='required-star'>*</span></label>
                        <br/>
                        <input
                        style={{width:'calc(100% - 8px', margin:'1px'}}
                        id='cityBill'
                        name='cityBill'
                        type='text'
                        value={customer.cityBill}
                        onChange={handleInputChange}
                        required
                        />
                        <label htmlFor='ProvBill'>Province <span className='required-star'>*</span></label>

                        <label htmlFor='ZIPBill' style={{marginLeft: "calc(50% - 68px)"}}>ZIP <span className='required-star'>*</span></label>
                        <br/>
                        <input
                        style={{width:'calc(50% - 14px)', margin: '1px'}}
                        id='ProvBill'
                        name='ProvBill'
                        type='text'
                        value={customer.ProvBill}
                        onChange={handleInputChange}
                        required
                        />
                        <input
                        style={{width:'calc(50% - 14px)', margin: '5px'}}
                        id='ZIPBill'
                        name='ZIPBill'
                        type='text'
                        value={customer.ZIPBill}
                        onChange={handleInputChange}
                        required
                        />
                        <br/>
                        <label htmlFor='companyBill'>Company</label>
                        <br/>
                        <input
                        style={{width:'calc(100% - 8px', margin:'1px'}}
                        id='companyBill'
                        name='companyBill'
                        type='text'
                        value={customer.companyBill}
                        onChange={handleInputChange}
                        />
                        <label htmlFor='phoneBill'>Phone Number <span className='required-star'>*</span></label>
                        <br/>
                        <input
                        style={{ width: 'calc(100% - 8px)', margin: '1px' }}
                        id='phoneBill'
                        name='phoneBill'
                        type='tel'
                        pattern='\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}'
                        value={customer.phoneBill}
                        onChange={handleInputChange}
                        required
                        />
                        </div>
                        )}
                        <br/>

                        <button type="submit">Submit Order</button>

                    </form>
                </div>)}
                </div>
            </div>
            <div className='cart-preview'>

            </div>
        </div>
        </div>
        
    );
};

export default Checkout;
