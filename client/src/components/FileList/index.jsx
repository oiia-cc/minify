import { useFileStore } from '../../stores/file.store';
import { useFiles } from '../../hooks/useFiles';
import { useEffect } from 'react';
import Footer from '../Footer';
import Paginate from '../Pagnigate';
import { usePagination } from '../../hooks/usePagination';

export default function FileList() {
  const { files, pagnigateMeta } = useFiles();

  const { currentPage, totalPages, hasNext, hasPrev, goNext, goPrev } =
    usePagination(pagnigateMeta);
  console.log('/>>>', files);

  if (!files.length) return <div>No files yet.</div>;

  return (
    <div>
      {files.map((f) => (
        <div key={f.id} className="file-card">
          <hr />
          <p>
            <b>
              {f.displayName} | {f.updatedAt} | {f.versions[0]?.mimeType}
            </b>
          </p>
        </div>
      ))}
      <Paginate
        page={currentPage}
        totalPages={totalPages}
        hasNext={hasNext}
        hasPrev={hasPrev}
        // onNext={goNext}
        onPrev={goPrev}
      />
      <Footer />
    </div>
  );
}
