import { Formik, Form, Field } from 'formik';
import css from './SearchBar.module.css';
import magnifyingGlassSvg from './magnifyingGlass.svg';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    const formattedSearch = values.search.trim().toLowerCase();
    onSubmit(formattedSearch);
    actions.resetForm();
  };

  return (
    <header className={css.searchHeader}>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <Form className={css.searchForm}>
          <button className={css.searchButton} type="submit">
            <img src={magnifyingGlassSvg} alt="Search Icon" />
          </button>
          <Field
            className={css.searchInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
