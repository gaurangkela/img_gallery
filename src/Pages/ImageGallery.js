import React, { useState } from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Modal from "../Components/Modal";


const ImageGallery = ({ imageData }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const images = imageData.map((item) => ({
        original: item.fullSizeURL,
        thumbnail: item.thumbnailURL,
        // description: item.description,
    }));

    const handleSlide = (index) => {
        setSelectedImageIndex(index);
    };

    return (
        <div>

            <div className="gallery-title">
                <h1>Photo Gallery</h1>
            </div>
            <div className="dummy-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>

            <div className="buttons-container">
                <button className="button">All</button>
                <button className="button">Branding</button>
                <button className="button">Design</button>
                <button className="button">Development</button>
            </div>

            <div className="grid-container">
                {imageData.map((item, index) => (
                    <div
                        key={index}
                        className="grid-item"
                        onClick={() => openModal(index)}
                    >
                        <img src={item.thumbnailURL} alt={item.description} />
                    </div>
                ))}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="modal"
                ariaHideApp={false}
            >
                <button className="close-button" onClick={closeModal}>
                    Close
                </button>

                <div className="gallery-view">
                    <Gallery
                        showFullscreenButton={false}
                        showPlayButton={false}
                        items={images}
                        slideDuration={0} // Set slideDuration to 0 to disable automatic sliding
                        startIndex={selectedImageIndex}
                        onSlide={handleSlide}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default ImageGallery;
