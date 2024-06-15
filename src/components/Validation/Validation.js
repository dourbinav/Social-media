import * as Yup from 'yup'

 const validationSchema=Yup.object().shape({
  username:Yup.string().required('Required'),
    password:Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required')
  })

  const validationRegisterSchema=Yup.object().shape({
    username:Yup.string().required('Required'),
    email:Yup.string().matches(
      /^(\w+([-+.']\w+)*@\w+([-.]\w+)*(\.\w+([-]\w+)*(\.\w+)?)?)|(\d{10})$/,
      'Invalid email or phone number'
    )
    .required('Required'),
    Fullname:Yup.string()
    .matches(/^[^\d]+$/, 'Name should not contain numbers').required('Required'),
    password:Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required')
  })



  export default validationSchema;
  export {validationRegisterSchema}