import { TOTAL_PAGES } from "../../constants/constants";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import Pagination from "../Pagination/Pagination";
import styles from "./styles.module.css";

const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {
  const handleHextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (PageNumber) => {
    changeFilter("page_number", PageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <Pagination
        handleHextPage={handleHextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />

      <NewsList isLoading={isLoading} news={news} />

      <Pagination
        handleHextPage={handleHextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />
    </section>
  );
};

export default NewsByFilters;
