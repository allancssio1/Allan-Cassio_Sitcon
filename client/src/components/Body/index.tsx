import './styles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ListUsers } from '../../pages/ListUsers'
import { FormUser } from '../../pages/Register'
import { ListRequests } from '../../pages/ListRequests'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ListUsers />,
  },
  {
    path: '/register/:id',
    element: <FormUser />,
  },
  {
    path: '/requests',
    element: <ListRequests />,
  },
])

export const Body = () => {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  )
}
