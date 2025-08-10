import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import MainPage from './pages/MainPage'
import AppLayout from './shared/components/layout/AppLayout'

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <MainPage />
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
