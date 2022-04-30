import React, { useEffect } from "react";
import "./modal.css";
import { ReactComponent as Close } from './icon/close.svg';


const Modal = ({ isOpen, onRequestClose, children, hasBackdrop, style }) => {

    let modalStyle = {};
    let backdropStyle = {};

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                onRequestClose();
            }
        };
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close);
    }, [ onRequestClose ]);

    backdropStyle.background = hasBackdrop ? 'rgba(0, 0, 0, 0.85)' : 'none';

    // Check if style is an object with property 'content'
    if (typeof style === 'object' && style.hasOwnProperty('content')) {
        modalStyle = style.content;
    }

    // Check if style is an object with property 'backdrop'
    if (typeof style === 'object' && style.hasOwnProperty('backdrop')) {
        backdropStyle = style.backdrop;

    }

    backdropStyle = { ...backdropStyle, display: isOpen ? 'flex' : 'none' };

    return (
        <div className="backdrop" style={backdropStyle} >
            <div className="modal-wrapper" style={modalStyle}>
                <Close className="close__button" onClick={onRequestClose} />
                {children}
            </div>
        </div>
    );
};

export default Modal;