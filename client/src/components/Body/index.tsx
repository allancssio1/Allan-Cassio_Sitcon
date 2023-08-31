import './styles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ListUsers } from '../../pages/ListUsers'
import { FormUser } from '../../pages/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ListUsers />,
  },
  {
    path: '/register/:id',
    element: <FormUser />,
  },
])

export const Body = () => {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  )
}
