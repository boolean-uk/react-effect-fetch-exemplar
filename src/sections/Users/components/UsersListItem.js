function UserListItem({ name, imageUrl, gender, email }) {
    return (
        <li className={`bg-${gender === 'male' ? 'blue': 'pink'}`}>
            <img
                src={imageUrl}
                alt={name}
            />

            <h3>{name}</h3>
            <p>Email: {email}</p>
        </li>
    )
}

export default UserListItem
