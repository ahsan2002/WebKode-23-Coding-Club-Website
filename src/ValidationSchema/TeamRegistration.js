import * as yup from "yup";

export const TeamRegistrationSchema = yup.object({
  regtype: yup
    .string()
    .required('Team category is required'),

  teamname: yup
    .string()
    .required('Team name is required'),

  email: yup
    .string()
    .email()
    .required('email is required'),

  phone: yup
    .number('Enter a valid number')
    .positive('')
    .required('phone number is required'),

  memberonename: yup
    .string()
    .required('Member 1 Name is Required'),

  memberoneuni: yup
    .string()
    .required('Member 1 University is Required'),

  // membertwoname: yup
  // .string()
  // .required('Member 2 Name is Required'),

  // membertwouni: yup
  // .string()
  // .required('Member 2 University is Required'),

  // member3Name: yup
  // .string(),

  // member3disuniversity: yup
  // .string()
})