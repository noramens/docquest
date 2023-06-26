import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import Button from './Button';

interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  handleSubmit: (values: LoginFormValues) => void;
}

const FormField = styled(Field)`
  display: block;
  width: 95%;
  padding: 8px;
`;

const ErrorLabel = styled(ErrorMessage)`
  color: #ff0000;
  margin: 0;
  font-size: 0.9rem;
`;

const Label = styled.label`
  color: #999;
`;

const InputWrapper = styled.div`
  margin: 10px;
`;

const LoginForm: React.FC<LoginFormProps> = ({ handleSubmit }) => {
  const initialValues: LoginFormValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <InputWrapper>
          <Label htmlFor="email" data-testid="email">
            Email*
          </Label>
          <FormField type="email" id="email" name="email" />
          <ErrorLabel name="email" component="div" />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="password" data-testid="password">
            Password*
          </Label>
          <FormField type="password" id="password" name="password" />
          <ErrorLabel
            name="password"
            component="div"
            data-tesid="error-label"
          />
        </InputWrapper>

        <Button type="submit" long="login">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
