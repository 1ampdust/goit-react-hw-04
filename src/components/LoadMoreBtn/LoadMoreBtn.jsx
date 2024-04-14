const LoadMoreBtn = ({ onLoadMore }) => {
  const handleClick = () => {
    onLoadMore();
  };

  return (
    <button onClick={handleClick} type="button">
      Load more
    </button>
  );
};

export default LoadMoreBtn;