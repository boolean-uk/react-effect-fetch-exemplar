import UserListItem from "./UsersListItem"

function UsersList({ users }) {
    return (
        <ul className="users-list">
            {users.map((user, index) => (
                <UserListItem
                    key={index}
                    name={user.name}
                    email={user.email}
                    gender={user.gender}
                    imageUrl={user.imageUrl}
                />
            ))}
        </ul>
    )
}

export default UsersList
