import { ListUsers } from '../../pages/ListUsers'
import { FormUser } from '../../pages/Register'
import './styles.css'

export const Body = () => {
  return (
    <div className="container">
      <FormUser />
      {/* <ListUsers /> */}
    </div>
  )
}
