import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchMe, login, logout } from './auth.api';

export function useAuth() {
  const qc = useQueryClient(); // hook1?

  // hook2?
  const meQuery = useQuery({
    queryKey: ['me'], // key
    queryFn: fetchMe, // method
    retry: false, // opts
  });

  const signIn = async (payload) => {
    // call login
    await login(payload);

    // hook1 + data...?
    qc.invalidateQueries(['me']);
  };

  const signOut = async () => {
    await logout();

    // hook1 + data null?
    qc.setQueryData(['me'], null);
  };

  return {
    user: meQuery.data,
    isLoading: meQuery.isLoading,
    isAuthenticated: !!meQuery.data,
    signIn, // ex fn,
    signOut, // ex fn,
  };
}



----

* giải thích file reactQuery và tại sao thay đc zustand?  import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchMe, login, logout } from './auth.api'

export function useAuth() {
  const qc = useQueryClient()

  const meQuery = useQuery({
    queryKey: ['me'],
    queryFn: fetchMe,
    retry: false,
  })

  const signIn = async (payload) => {
    await login(payload)
    qc.invalidateQueries(['me'])
  }

  const signOut = async () => {
    await logout()
    qc.setQueryData(['me'], null)
  }

  return {
    user: meQuery.data,
    isLoading: meQuery.isLoading,
    isAuthenticated: !!meQuery.data,
    signIn,
    signOut,
  }
}
