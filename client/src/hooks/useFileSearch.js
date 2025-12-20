import { useEffect, useState } from 'react';
import { filesApi } from '../api/files.api';
import { useFileStore } from '../stores/file.store';
import { useDebounce } from './useDebounce';
import { usePagnigateStore } from '../stores/pagnigate.store';

export const useFileSearch = () => {
  const setFiles = useFileStore((s) => s.setFiles);
  const pagnigateMeta = usePagnigateStore((s) => s.pagnigateMeta);

  // --- States ---
  const [keyword, setKeyword] = useState('');
  const [groupBy, setGroupBy] = useState('none');
  const [sortBy, setSortBy] = useState('updatedAt');
  const [orderBy, setOrderBy] = useState('desc');

  // --- Debounce only keyword ---
  const debouncedKeyword = useDebounce(keyword, 300);

  useEffect(() => {
    console.log('>>> k:', keyword);
    console.log('>>> gb:', groupBy);
    console.log('>>> sb:', sortBy);
    console.log('>>> ob:', orderBy);

    const fetch = async () => {
      const res = await filesApi.list({
        search: debouncedKeyword,
        groupBy,
        sortBy,
        orderBy,
        page: pagnigateMeta.currentPage,
        limit: pagnigateMeta.limit,
      });

      setFiles(res.data);
    };

    fetch();
  }, [debouncedKeyword, groupBy, sortBy, orderBy]);
  // listen to all params

  return {
    keyword,
    setKeyword,
    groupBy,
    setGroupBy,
    sortBy,
    setSortBy,
    orderBy,
    setOrderBy,
  };
};
