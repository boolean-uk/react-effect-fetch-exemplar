import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

const API_URL = 'https://randomuser.me/api/?results=20'

function UsersSection() {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(API_URL)
    const { results } = await response.json()

    const mappedUsers = results.map(result => {
        const { gender, email, name, picture } = result

        return {
            gender,
            name: Object.values(name).join(' '),
            email,
            imageUrl: picture.large
        }
    })

    setUsers(mappedUsers)
  }

  useEffect(() => {
      getUsers()
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
          <UsersList users={users} />
      </div>
    </section>
  )
}

export default UsersSection
