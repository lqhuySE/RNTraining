import * as yup from 'yup';

export const signUpValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    // .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    // .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    // .matches(/\d/, 'Password must have a number')
    // .matches(
    //   /[!@#$%^&*()\-_"=+{}; :,<.>]/,
    //   'Password must have a special character',
    // )
    .min(5, ({min}) => `Passowrd must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});

export const signInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    // .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    // .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    // .matches(/\d/, 'Password must have a number')
    // .matches(
    //   /[!@#$%^&*()\-_"=+{}; :,<.>]/,
    //   'Password must have a special character',
    // )
    .min(5, ({min}) => `Passowrd must be at least ${min} characters`)
    .required('Password is required'),
});
