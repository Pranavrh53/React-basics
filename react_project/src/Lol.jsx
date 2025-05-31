import React, { useState } from 'react';

function Lol() {
    const [name, setName] = useState('guest');
    const [quantity, setQuantity] = useState(22);
    const [comment, setComment] = useState('');

    const [payment, setpayment]= useState('')
    const [shipping,setshipping]= useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        const value = event.target.value;
        setQuantity(value === '' ? '' : Number(value)); // handles clearing input
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlepaymentchange(event){

        setpayment(event.target.value);


    }

    function handkeshippingchange(event){
        setshipping(event.target.value);


    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} placeholder="Enter name" />
            <p>Name: {name}</p>

            <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                placeholder="Enter quantity"
            />
            <p>Quantity: {quantity}</p>

            <textarea
                value={comment} onChange={handleCommentChange} placeholder="Enter instructions"
            />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlepaymentchange}>

                <option value={''}>select an option</option>
                <option value={'visa'}>visa</option>
                <option value={'masercard'}>masercard</option>
           
            </select>
            <p>payment:{payment}</p>


            <label>
                <input type='radio' 
                name="shipping" 
                value ="pickup"  
                checked={shipping == "pickup"}  
                onChange={handkeshippingchange}>
                
                </input>
                pickup
            </label>

            <label>
            <input type='radio' 
            name="shipping" 
            value ="dilevary"  
            checked={shipping == "dilevary"}  
            onChange={handkeshippingchange}>
                
                </input>
                delivery
            </label>

            <p>shipping:{shipping}</p>
        </div>
    );
}

export default Lol;
