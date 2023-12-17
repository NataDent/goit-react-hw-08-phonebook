// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { selectUser } from 'redux/auth/selectors';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAvatar } from 'redux/auth/operations';

const UpdateProfilePage = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const handleChange = e => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateAvatar(file));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="file" />
        <button>Update avatar</button>
      </form>
    </>
  );
};
export default UpdateProfilePage;
