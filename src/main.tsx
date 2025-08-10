import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import MainPage from './pages/MainPage'
import { getAllNvimPlugins } from './shared/service/apiHandler'
import AppLayout from './features/layout/AppLayout'
import MainPageSkeleton from './features/layout/main/MainPageSkeleton'
// import { neverResolve } from './shared/utils'

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <MainPage />,
                loader: getAllNvimPlugins,
                // loader: neverResolve,
                hydrateFallbackElement: <MainPageSkeleton />
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
