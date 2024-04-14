import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMassage";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import { fetchImages, fetchImagesByQuery } from "./components/axiosInstance"; // Импортируем функции запросов из axiosInstance

const App = () => {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchImagesData() {
      try {
        setIsLoading(true);
        const data = await fetchImages();
        setImages(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImagesData();
  }, []);

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchImagesByQueryData() {
      try {
        setIsLoading(true);
        const data = await fetchImagesByQuery(query);
        setImages(data.results); // Передаем только результаты изображений
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImagesByQueryData();
  }, [query]);

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  };

  return (
    <div>
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images && <ImageGallery images={images} />}
    </div>
  );
};

export default App;
