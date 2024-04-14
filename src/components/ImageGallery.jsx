const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map((image, index) => (
        <li key={index}>
          <div>
            <img src={image.url} alt={image.alt} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
