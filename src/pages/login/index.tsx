import { yupResolver } from '@hookform/resolvers/yup';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { AuthLoginRequest } from '../../@server/modules/users/auth/requests/auth-login.request';
import { yupValidator } from '../../client/common/validations/validations.yup';
import ControlledPasswordInput from '../../client/Components/molecules/ControlledInputs/ControlledPasswordInput.molecule';
import ControlledTextInput from '../../client/Components/molecules/ControlledInputs/ControlledTextInput.molecule';
import Form from '../../client/Components/molecules/Form/Form.molecule';
import useLoading from '../../client/hooks/useLoading';
import useUser from '../../client/hooks/useUser';
import Blank from '../../client/Layouts/Blank';
import { routes } from '../../client/Routes';
import { authService } from '../../client/service/auth/auth.service';

const PLogin: NextPage = (): JSX.Element => {
  const { isLoading, setIsLoading } = useLoading();
  const { user } = useUser()
  user && useRouter().push(routes.dashboard)

  const schema = yup.object().shape({
    email: yupValidator.email,
    password: yupValidator.passwordLogin,
  });

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<AuthLoginRequest>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (req: AuthLoginRequest) => {
    setIsLoading(true);
    authService.login(req)
  });

  return (
    <Blank title="Login">
      <div className="login__container page__center">
        <div className="page__center">
          <img
            className="login__company__logo"
            src="favicon.ico"
          />
        </div>

        <Form
          buttonTitle="Login"
          title="Login"
          onSubmit={onSubmit}
          isValid={isValid}
          isLoading={isLoading}
        >
          <ControlledTextInput
            name="email"
            control={control}
          />

          <ControlledPasswordInput
            name="password"
            control={control}
          />
        </Form>
      </div>
    </Blank >
  );
};

export default PLogin;