import {string, object} from 'yup'; 

export const loginSchema = object({
    body : object({
        password: string().required('Password is required'), 
        email: string().email('Most be a valid email').required('Email is required')
    })
})