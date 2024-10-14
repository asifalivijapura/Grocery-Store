import React, { useState } from 'react'
import Grocerylogo from '../../images/Grocerylogo.png'
import { Link } from 'react-router-dom'
import AddProducts from './AddProducts';

const Admin = () => {


    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false)

    return (
        <>

            <nav class="navbar navbar-custom d-flex justify-content-between">
                <a class="navbar-brand" href="#">
                    {/* <!-- Logo (you can replace the src with your logo image) --> */}
                    <img src={Grocerylogo} alt="Logo" />
                </a>
                <button class="btn btn-add-product" onClick={onOpenModal}>
                    Add Product
                </button>
                <AddProducts onCloseModal={onCloseModal} open={open} />
            </nav>

            <div class="d-flex">

                <div class="sidebar bg-success">
                    <a href="#" class="d-flex align-items-center">
                        <i class="fas fa-box mr-2"></i> Products
                    </a>
                    <a href="#" class="d-flex align-items-center">
                        <i class="fas fa-sign-out-alt mr-2"></i> Logout
                    </a>
                </div>


                <div class="content">
                    <h2>Product Management</h2>
                    <p>Content of the products management section goes here...</p>
                </div>
            </div>
        </>
    )
}

export default Admin
