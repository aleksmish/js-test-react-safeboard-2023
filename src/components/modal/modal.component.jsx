import './modal.styles.scss'

const Modal = ({ isModalVisible, setIsModalVisible, children }) => {
    const handleCloseModal = (event) => {
        setIsModalVisible(false)
    }

    if (isModalVisible) {
        return (
            <div className="modal-wrapper">
                <div className="modal-container">
                    <div className="header">
                        <button onClick={handleCloseModal}>Закрыть</button>
                    </div>
                    <div className="main">{children}</div>
                </div>
            </div>
        )
    }
    return null
}

export default Modal
