import * as yup from "yup";

export const MemberRegistrationSchema = yup.object({
    firstname: yup
      .string()
      .required('First Name is required'),

      lastname: yup
      .string()
      .required('Last Name is required'),

      memberemail: yup
      .string()
      .email()
      .required('Email is required'),

      memberPhone: yup
      .number('Enter a valid number')
      .positive('')
      .required('phone number  is required'),

      university: yup
      .string()
      .required('University is Required'),

      discipline: yup
      .string()
      .required('Discipline is Required'),

      shortbio: yup
      .string()
      .required('Please enter your short bio')

  })