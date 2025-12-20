import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '../App';

// Create a client
export default function AuthProvider() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
