import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import StarshipsFeedScreen from './StarshipsFeedScreen'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

const App = () => {

  return (
    
    <QueryClientProvider client={queryClient}>
      <StarshipsFeedScreen> </StarshipsFeedScreen>
    </QueryClientProvider>
    
  );

};

export default App;
