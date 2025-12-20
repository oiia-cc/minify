import { filesApi } from '../api/files.api';
import { useFileStore } from '../stores/file.store';
import { useEffect } from 'react';
import { usePagnigateStore } from '../stores/pagnigate.store';

export const useFiles = () => {
  const files = useFileStore((s) => s.files);
  const setFiles = useFileStore((s) => s.setFiles);
  const pagnigateMeta = usePagnigateStore((s) => s.pagnigateMeta);
  const setPagnigateMeta = usePagnigateStore((s) => s.setPagnigateMeta);
  const refresh = async () => {
    const res = await filesApi.list();
    // console.log('--->>>', res);

    setPagnigateMeta(res.data.meta);
    setFiles(res.data.data);
  };

  useEffect(() => {
    refresh();
  }, []);

  return { files, refresh, pagnigateMeta };
};
