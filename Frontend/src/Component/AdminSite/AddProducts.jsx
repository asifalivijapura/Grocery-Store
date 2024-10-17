import React, { useState } from 'react'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
import { useDispatch } from "react-redux";
import { postDataFromData } from '../../adminReducer/action';

const AddProducts = ({ setOpen, open, onCloseModal }) => {

    const dispatch = useDispatch()

    const options = ['Fruits', 'Vegetables', 'Dairy', 'Meat', 'Grains', 'Beverages', 'Snacks']

    const [formData, setFormData] = useState({
        category: '',
        name: '',
        imageUrl: '',
        description: '',
        quantity: '',
        price: '',
        discountprice: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const onSubmitData = (e) => {
        e.preventDefault()
        // console.log("formData", formData)
        dispatch(postDataFromData(formData))
        setOpen(false)
        setFormData({
            category: '',
            name: '',
            imageUrl: '',
            description: '',
            quantity: '',
            price: '',
            discountprice: ''
        })
    }

    return (
        <>
            <Modal open={open} onClose={onCloseModal} center>
                <div style={{ margin: '30px', backgroundColor: ' rgb(132 193 146)' }}>
                    <div className='loginContainer'>
                        <div>
                            <form className='form_admin_side' onSubmit={onSubmitData}>
                                <div>
                                    <label className='label_admin_side' for="cars">Category </label> &nbsp;
                                    <select name="category" onChange={handleChange}>
                                        {options &&
                                            options.map((elem, idx) => {
                                                return (
                                                    <option key={idx} value={elem}>{elem}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div>
                                    <label className='label_admin_side'>FullName</label> &nbsp;
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData?.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className='label_admin_side'>Select a file</label>&nbsp;
                                    <input
                                        type="text"
                                        name="imageUrl"
                                        value={formData?.imageUrl}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className='label_admin_side'>Description</label> &nbsp;
                                    <input
                                        type="text"
                                        name="description"
                                        value={formData?.description}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className='label_admin_side'>Quantity</label>&nbsp;
                                    <input
                                        type="number"
                                        name="quantity"
                                        value={formData?.quantity}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className='label_admin_side'>Origional Price</label>&nbsp;
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData?.price}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className='label_admin_side'>Discount Price</label>&nbsp;
                                    <input
                                        type="number"
                                        name="discountprice"
                                        value={formData?.discountprice}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='btn_admin_side'>
                                    <button>Publish</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default AddProducts
