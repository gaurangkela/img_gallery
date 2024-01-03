import React from "react";
import ReactModal from "react-modal";

const Modal = ({
    isOpen,
    onRequestClose,
    contentLabel,
    className,
    children,
}) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={contentLabel}
            className={className}
        >
            {children}
        </ReactModal>
    );
};

export default Modal;
