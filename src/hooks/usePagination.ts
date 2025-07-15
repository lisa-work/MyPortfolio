import { useState } from 'react';

export function usePagination<T>(items: T[], itemsPerPage = 3) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(items.length / itemsPerPage);

  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function setPage(page: number) {
    setCurrentPage(page);
  }

  return { paginatedItems, currentPage, maxPage, setPage };
}
