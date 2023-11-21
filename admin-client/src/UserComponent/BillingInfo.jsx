import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './BillingInfo.css'

function BillingInfo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    // Add more fields as needed
  });

  // The name attribute is used to identify which field in the form is being updated when an input's value changes. In React forms, using the name attribute is a common practice, and it's typically used when you have multiple input fields and want to handle them dynamically within a single event handler.

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const proceedToPayment = () => {
    if (formData.name && formData.address && formData.city && formData.postalCode) {
      navigate('/payment', { state: { billingAddress: formData } });
    } else {
      alert('Please fill in all fields before proceeding.');
    }
  };

  return (
    <div className='billing'>
      <h2>Billing Address</h2>
      <div className='billing__container'>
      <form>
        <h5>Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          </h5>
          <h5>Address:
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
          </h5>
          <h5>City:
          <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
          </h5>
          <h5>Postal Code:
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} />
          </h5>
        <button onClick={proceedToPayment}>Proceed to Payment</button>
      </form>
      </div>
    </div>
  );
}

export default BillingInfo;