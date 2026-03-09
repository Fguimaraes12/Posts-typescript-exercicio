import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import PostsProvider from './contexts/PostsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostsProvider>
     <App />
    </PostsProvider>
  </StrictMode>,
)
