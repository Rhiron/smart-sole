import React, { useState } from 'react';
import { useShoppingCart } from './ShoppingCartContext';
import '../Styling/Checkout.css';

const SectionHeader = ({ title, onClick, isActive }) => {
    const headerClass = isActive ? 'section-heading-active' : 'section-heading-inactive';
    return (
      <div className={headerClass} onClick={onClick}>
        <h2>{title}</h2>
      </div>
    );
  };
const Checkout = () => {
    const { cartItems, clearCart } = useShoppingCart();
    const [customer, setCustomer] = useState({
        email: '',
        countryShip: '',
        fNameShip: '',
        lNameShip: '',
        AddressShip: '',
        cityShip: '',
        ProvShip: '',
        ZIPShip: '',
        companyShip: '',
        phoneShip: '',
        countryBill: '',
        fNameBill: '',
        lNameBill: '',
        AddressBill: '',
        cityBill: '',
        ProvBill: '',
        ZIPBill: '',
        companyBill: '',
        phoneBill: '',
    });
    const [currentSection, setCurrentSection] = useState('shipping');
    const [isChecked, setIsChecked] = useState(false);
    const [isBillingSameAsShipping, setIsBillingSameAsShipping] = useState(true);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleBillingToggleChange = (e) => {
        setIsBillingSameAsShipping(e.target.checked);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomer(prevCustomer => ({
            ...prevCustomer,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting Form Data:', customer);
        console.log('Cart Items:', cartItems);
        alert('Thank you for your order!');
        clearCart();
    };
    const handleNextSection = (nextSection) => {
        setCurrentSection(nextSection);
    };
    const renderShippingInfo = () => (
                <form className='shipping-form'>
                <label htmlFor='email'>Email <span className='required-star'>*</span></label>
                <br/>
                <input
                style={{width:'calc(100% - 8px', margin:'1px'}}
                id='email'
                name='email'
                type='email'
                placeholder='Example@email.com'
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
                placeholder='Canada'
                required
                />
                <label htmlFor='fNameShip'>First Name <span className='required-star'>*</span></label>

                <label htmlFor='lNameShip' style={{marginLeft: "calc(50% - 86px)"}}>Last Name <span className='required-star'>*</span></label>
                <br/>
                <input
                style={{width:'calc(50% - 14px)', margin: '1px'}}
                id='fNameShip'
                name='fNameShip'
                placeholder='John'
                type='text'
                value={customer.fNameShip}
                onChange={handleInputChange}
                required
                />
                <input
                style={{width:'calc(50% - 14px)', margin: '5px'}}
                id='lNameShip'
                name='lNameShip'
                placeholder='Doe'
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
                placeholder='123 Main Street'
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
                placeholder='Examplville'
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
                placeholder='Newfoundland'
                type='text'
                value={customer.ProvShip}
                onChange={handleInputChange}
                required
                />
                <input
                style={{width:'calc(50% - 14px)', margin: '5px'}}
                id='ZIPShip'
                name='ZIPShip'
                placeholder='X9X 9X9'
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
                placeholder='SmartSole'
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
                pattern='(1-)?\d{3}-\d{3}-\d{4}'
                value={customer.phoneShip}
                onChange={handleInputChange}
                placeholder='999-999-9999'
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
                placeholder='Canada'
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
                placeholder='John'
                type='text'
                value={customer.fNameBill}
                onChange={handleInputChange}
                required
                />
                <input
                style={{width:'calc(50% - 14px)', margin: '5px'}}
                id='lNameBill'
                name='lNameBill'
                placeholder='Doe'
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
                placeholder='123 Main Street'
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
                placeholder='Examplville'
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
                placeholder='Newfoundland'
                type='text'
                value={customer.ProvBill}
                onChange={handleInputChange}
                required
                />
                <input
                style={{width:'calc(50% - 14px)', margin: '5px'}}
                id='ZIPBill'
                name='ZIPBill'
                placeholder='X9X 9X9'
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
                placeholder='SmartSole'
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
                pattern='(1-)?\d{3}-\d{3}-\d{4}'
                value={customer.phoneBill}
                placeholder='999-999-9999'
                onChange={handleInputChange}
                required
                />
                </div>
                )}
                <br/>
                    <button type="button" onClick={() => handleNextSection('method')}>Save and Continue</button>
                </form>
    );

    const renderPaymentMethod = () => (
            <form>
            <input
            id='standardShipping' 
            name='standardShipping'
            type='checkbox'
            onChange={handleCheckboxChange}
            />
            <label htmlFor='standardShipping'>Standard Shipping 3-5 Days Free
            </label>
            <br/>
            <input
            id='standardShipping' 
            name='standardShipping'
            type='checkbox'
            onChange={handleCheckboxChange}
            />
            <label htmlFor='expeditedShipping'>Expedited Shipping 1-2 Days $15.00
            </label>
            <br/>
                <button type="button" onClick={() => handleNextSection('payment')}>Save and Continue</button>
            </form>
    );

    const renderPayment = () => (
            <form onSubmit={handleSubmit}>
                {/*Need to add payment fields*/}
                <button type="submit">Finish Order</button>
            </form>
    );

    return (
        <div>
            <h2 className='page-head'>Checkout</h2>
            <div className='checkout-container'>
                <div className='info-block'>
                    <SectionHeader title="Shipping Information" onClick={() => setCurrentSection('shipping')} isActive={currentSection === 'shipping'} />
                    {currentSection === 'shipping' && renderShippingInfo()}

                    <SectionHeader title="Shipping Method" onClick={() => setCurrentSection('method')} isActive={currentSection === 'method'} />
                    {currentSection === 'method' && renderPaymentMethod()}

                    <SectionHeader title="Payment" onClick={() => setCurrentSection('payment')} isActive={currentSection === 'payment'} />
                    {currentSection === 'payment' && renderPayment()}
                </div>
                <div className='cart-preview'>
                    {/* Cart Preview */}
                </div>
            </div>
        </div>
    );
};

export default Checkout;