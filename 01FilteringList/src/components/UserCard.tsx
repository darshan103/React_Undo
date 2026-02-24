type UserCardProps = {
  name: string;
  email: string;
  website: string;
}

const UserCard = (props: UserCardProps) => {
  const {name, email, website} = props;
  return (
    <div className="user-card">
          <img src="https://s3.amazonaws.com/images.seroundtable.com/google-paint-brusges-1531914263.jpg" alt="user-image" />
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Website: {website}</p>
    </div>
  )
}

export default UserCard;