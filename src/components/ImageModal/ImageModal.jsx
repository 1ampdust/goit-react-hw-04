// ImageModal.jsx
import ReactModal from "react-modal";

const ImageModal = ({ imageUrl, alt, isOpen, onRequestClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
    >
      <div>
        <img src={imageUrl} alt={alt} />
      </div>
    </ReactModal>
  );
};

export default ImageModal;
