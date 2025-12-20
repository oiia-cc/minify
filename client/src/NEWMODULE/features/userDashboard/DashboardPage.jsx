import { useDashboard } from './useDashboard';
import { SearchBar, FilterBar, List, Pagination } from './components';

export function DashboardPage() {
  const state = useDashboard();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <SearchBar value={state.keyword} onChange={state.onSearch} />

      <FilterBar value={state.filters} onChange={state.onFilter} />

      <List data={state.data} meta={state.meta} loading={state.loading} />

      <Pagination
        total={state.meta.total}
        limit={state.meta.limit}
        current={state.meta.page}
        hasPrev={state.meta.hasPrev}
        hasNext={state.meta.hasNext}
        onNext={state.goNext}
        onPrev={state.goPrev}
      />
    </div>
  );
}
