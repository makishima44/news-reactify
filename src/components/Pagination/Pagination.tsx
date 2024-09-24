import { IPaginationProps } from "@/interfaces";
import styles from "./styles.module.css";
import { useTheme } from "../../context/ThemeContext";

const Pagination = ({
  totalPages,
  handleHextPage,
  handlePreviousPage,
  handlePageClick,
  currentPage,
}: IPaginationProps) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
    >
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              key={index}
              className={styles.pageNumber}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <button
        disabled={currentPage >= totalPages}
        onClick={handleHextPage}
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
