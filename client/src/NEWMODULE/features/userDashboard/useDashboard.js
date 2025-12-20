import { useEffect, useState } from 'react';
import { fetchDashboardItems } from './dashboard.api';

export function useDashboard() {
  // ===== state =====
  const [keyword, setKeyword] = useState('');
  const [filters, setFilters] = useState({
    groupBy: 'none',
    sortBy: 'updatedAt',
    orderBy: 'desc',
  });

  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 20;

  // ===== data =====
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({
    page,
    skip,
    hasPrev: false,
    hasNext: false,
    total: 0,
  });
  const [loading, setLoading] = useState(false);

  // ===== fetch =====
  useEffect(() => {
    let alive = true;
    setLoading(true);

    fetchDashboardItems({
      search: keyword,
      groupBy: filters.groupBy,
      orderBy: filters.orderBy,
      sortBy: filters.sortBy,
      page,
      limit,
    })
      .then((res) => {
        if (!alive) return;
        setData(res.data);
        setMeta({ ...res.meta, hasPrev: Number(page) > 1 ? true : false });
      })
      .finally(() => alive && setLoading(false));

    return () => {
      alive = false;
    };
  }, [keyword, filters, page]);

  // ===== actions =====
  console.log('metea', meta);

  const goNext = () => meta.hasNext && setPage((s) => s + 1);
  const goPrev = () => meta.hasPrev && setPage((s) => s - 1);

  const onSearch = (value) => {
    setKeyword(value);
    setPage(1);
  };

  const onFilter = (value) => {
    setFilters(value);
    setPage(1);
  };

  return {
    // state
    keyword,
    filters,
    data,
    meta,
    loading,

    // actions
    onSearch,
    onFilter,
    goNext,
    goPrev,
  };
}
