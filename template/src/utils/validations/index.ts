import * as Yup from 'yup';
import { ObjectShape } from 'yup/lib/object';

const Validation = {
  object: (shape: ObjectShape) => Yup.object().shape(shape),
  email: () => Yup.string().email('Email is not valid!').required('Email is required!'),
  password: (msg?: string) =>
    Yup.string()
      .min(8, 'Password must be at least 8 characters!')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase character')
      .matches(/[a-z]/, 'Password must contain at least one lowercase character')
      .matches(/[\d]/, 'Password must contain at least one number')
      .required(msg || 'Password is required!'),
  confirmPassword: () => Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
};

export const ExampleValidation = Validation.object({
  email: Yup.string(),
  password: Validation.password(),
});
