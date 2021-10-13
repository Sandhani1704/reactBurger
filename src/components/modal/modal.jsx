import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

function Modal({title = '', hide, children}) {

    

    return ReactDOM.createPortal(
        (
            <div>
                <ModalOverlay onClick={hide}/>
                <div className={styles.popup} >
                    <div>
                        <div className={`ml-10 mr-10 ${styles.container}`}>
                            <div className={`text text_type_main-large ${styles.title}`}>{title}</div>
                            <CloseIcon type={'primary'} onClick={hide}/>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        ),
        document.body
    )
}

export default Modal