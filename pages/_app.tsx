import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

/**
 * This is for tanstack react query. 
 * It is a library that is used to cache data from the notion api. This is used to fetch featured blog information.
 */
const queryClient = new QueryClient(); 

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider attribute="class" defaultTheme='dark' enableSystem={false}>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </ThemeProvider>)
}

export default MyApp
