import axiosClient from '../../../api/axiosClient';

export async function fetchDashboardItems(params = {}) {
  const qs = new URLSearchParams(
    Object.fromEntries(
      Object.entries(params).filter(([_, v]) => v != null && v !== '')
    )
  ).toString();

  const res = await axiosClient(`/v1/files?${qs}`);

  // exception
  return res.data;
}
