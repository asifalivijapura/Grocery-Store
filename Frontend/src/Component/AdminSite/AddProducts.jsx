import React from 'react'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';


const AddProducts = ({ open, onCloseModal }) => {
    return (
        <>
            <Modal open={open} onClose={onCloseModal} center>
                <div style={{ margin: '30px', backgroundColor: ' rgb(132 193 146)' }}>
                    <div className='loginContainer'>
                        <div>
                            <form className='form_admin_side'>
                                <div>
                                    <label className='label_admin_side' for="cars">Category </label> &nbsp;
                                    <select id="cars">
                                        <option >Volvo</option>
                                        <option >Saab</option>
                                        <option >Opel</option>
                                        <option >Audi</option>
                                    </select>
                                </div>
                                <div>
                                    <label className='label_admin_side'>FullName</label> &nbsp;
                                    <input type="text" name="fullName"></input>
                                </div>
                                <div>
                                    <label className='label_admin_side'>Select a file</label>&nbsp;
                                    <input type="file" name="myFile" />
                                </div>
                                <div>
                                    <label className='label_admin_side'>Origional Price</label>&nbsp;
                                    <input type="number" name="quantity" />
                                </div>
                                <div>
                                    <label className='label_admin_side'>Discount</label>&nbsp;
                                    <input type="number" name="quantity" />
                                </div>
                                <div>
                                    <label className='label_admin_side'>Discount Price</label>&nbsp;
                                    <input type="number" name="quantity" />
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
