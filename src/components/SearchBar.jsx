//SearchBar.jsx
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const searchBarSchema = Yup.object().shape({
  searchTerm: Yup.string().required("Search term is required!"),
});

const SearchBar = ({ onSetSearchQuery }) => {
  const handleSubmit = (values) => {
    onSetSearchQuery(values.searchTerm);
  };

  return (
    <Formik
      initialValues={{ searchTerm: "" }}
      validationSchema={searchBarSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          <Field type="text" name="searchTerm" placeholder="Search images and photo" />
          <ErrorMessage component="p" name="searchTerm" />
        </label>
        <button type="submit" aria-label="Search">
          🔍
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
