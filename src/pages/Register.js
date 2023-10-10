import { RegisterForm } from 'components/RegisterForm';
import { Helmet } from 'react-helmet';

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default Register;
