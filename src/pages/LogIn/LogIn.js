import { LoginForm } from 'components/LogInForm/LogInForm';
import { Helmet } from 'react-helmet';

const LogIn = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default LogIn;
