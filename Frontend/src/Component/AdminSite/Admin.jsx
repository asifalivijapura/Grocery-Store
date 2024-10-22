import React, { useEffect, useState } from 'react'
import Grocerylogo from '../../images/Grocerylogo.png'
import AddProducts from './AddProducts';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { popularProduct } from '../../reducer/action';
import AdminLogin from './AdminLogin';
import { MdDelete } from "react-icons/md";
import DeleteProd from './DeleteProd';
import { deleteFromData } from '../../adminReducer/action';
import { errorTostify } from '../../toster/tostify';


const Admin = ({ data, setShowHeader }) => {
    // console.log("Data", data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(popularProduct())
    }, [popularProduct])

    const Data = useSelector(state => state.home.popularProductData.data?.data)

    setShowHeader(false)
    const [formData, setFormData] = useState()
    const [login, setLogin] = useState(true)
    const [open, setOpen] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false)

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false)

    const handleDeleteSubmit = () => {
        dispatch(deleteFromData(formData))
        setDeleteModal(false)
    }

    const handleDeleteClick = (data) => {
        setDeleteModal(true)
        setFormData(data)
    }

    const onDeleteClose = () => {
        
        setDeleteModal(false)
    }

    const onLoggedOut = () => {
        const message = 'You Are Logged Out From Admin Side'
        dispatch(errorTostify(message))
        localStorage.clear()
    }

    const localData = localStorage.getItem("isLoggedIn")
    // console.log("localData", localData)
    return (
        <>
            <nav class="navbar navbar-custom d-flex justify-content-between">
                <a class="navbar-brand" href="/">
                    <img src={Grocerylogo} alt="Logo" />
                </a>
                <button class="btn btn-add-product" onClick={onOpenModal}>
                    Add Product
                </button>
            </nav>
            {localData &&
                localData ?
                null
                : <AdminLogin data={data} setShowHeader={setShowHeader} login={login} setLogin={setLogin} />
            }
            <AddProducts onCloseModal={onCloseModal} open={open} setOpen={setOpen} />
            <DeleteProd deleteModal={deleteModal} onDeleteClose={onDeleteClose} handleDeleteSubmit={handleDeleteSubmit} />

            <div class="d-flex">

                <div class="sidebar bg-success">
                    <a href="" class="d-flex align-items-center">
                        <i class="fas fa-box mr-2"></i> Products
                    </a>
                    <a href="/" onClick={onLoggedOut} class="d-flex align-items-center">
                        <i class="fas fa-sign-out-alt mr-2"></i> Logout
                    </a>
                </div>

                {/* <div style={{ margin: '30px' }}> */}
                <div className="table-responsive" style={{ margin: '30px' }}>
                    <table className="table text-nowrap">
                        <thead className="table-light">
                            <tr>
                                <th />
                                <th>Product</th>
                                <th>Amount</th>
                                <th style={{ textAlign: 'center' }}>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data?.products &&
                                Data?.products?.map((element, index) => {
                                    return (
                                        < tr >
                                            <td className="align-middle">
                                                <Link to="#">
                                                    <img
                                                        src={element?.imageUrl}
                                                        className="img-fluid icon-shape icon-xxl"
                                                        alt="product"
                                                        style={{ height: '70px', width: '70px' }}
                                                    />
                                                </Link>
                                            </td>
                                            <td className="align-middle">
                                                <div>
                                                    <h5 className="fs-6 mb-0">
                                                        <Link to="#" className="text-inherit">
                                                            {element?.name}
                                                        </Link>
                                                    </h5>
                                                </div>
                                            </td>
                                            <td className="align-middle">₹{element?.price}</td>
                                            <td className="align-middle text-center">
                                                <Link
                                                    to="#"
                                                    className="text-muted"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Delete"
                                                >
                                                    <MdDelete className='prod_del_btn' onClick={() => handleDeleteClick(element)} />
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                {/* </div> */}
            </div >
        </>
    )
}

export default Admin