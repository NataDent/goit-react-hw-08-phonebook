import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from 'redux/auth/selectors';

const ProfilePage = () => {
  const { name, email, avatarURL } = useSelector(selectUser);
  return (
    <>
      <h2>{name}</h2>
      <p>{email}</p>
      <img
        src={
          avatarURL.includes('gravatar')
            ? avatarURL
            : `http://localhost:8000/${avatarURL}`
        }
        alt={name}
      />
      <Link to="update">Update profile</Link>
    </>
  );
};

export default ProfilePage;
