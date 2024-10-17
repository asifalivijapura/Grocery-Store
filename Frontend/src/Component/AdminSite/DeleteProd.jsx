import React from 'react'
import Modal from 'react-responsive-modal'

const DeleteProd = ({ deleteModal, onDeleteClose, handleDeleteSubmit }) => {
    return (
        <>
            <div className='delete_cover'>
                <Modal open={deleteModal} onClose={onDeleteClose}>
                    <div className='modal_cover'>
                        <div className='modal_head'>
                            <h2>Do you want to Delete user !</h2>
                        </div>
                        <div className='modal_contain'>
                            <button style={{ backgroundColor: 'red' }} onClick={handleDeleteSubmit} >Yes</button>
                            <button style={{ backgroundColor: 'green' }} onClick={onDeleteClose} >No</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default DeleteProd
