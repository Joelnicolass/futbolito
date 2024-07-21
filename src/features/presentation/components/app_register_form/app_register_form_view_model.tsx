import React from "react"
import { useDispatch } from "react-redux";
import { setEmail } from "../../store/slice/register_form_slice";
import * as yup from 'yup';
export const registerNameSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^'?\p{L}+(?:[' ]\p{L}+)*'?$/u)
    .required('Name is Required'),
});
export const registerEmailSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
});
export const registerPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const initialNameFormState = {name: ''};
const initialEmailFormState = {email: ''};
const initialPasswordFormState = {password: ''};
// create a component
export const AppRegisterFormViewModel = () => {

    const dispatch = useDispatch()


    const validateEmailForm = async (
        userFormValues: FormState,
        {setErrors}: any,
      ) => {
        const {email} = userFormValues;
        dispatch(setEmail(email));
      };
    return {
      initialNameFormState,
      initialEmailFormState,
      initialPasswordFormState,
    }
}


