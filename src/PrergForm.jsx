// import React, { PureComponent } from 'react'

// export default class PrergForm extends PureComponent {
//   render() {
//     return (
//       <div>PrergForm</div>
//     )
//   }
// }

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Pre-Registration.css';


const PrergForm = () => {


  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    college: '',
    college_state: '',
    current_year: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    ['full_name', 'email', 'phone_number', 'college', 'college_state', 'current_year'].forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    const phoneRegex = /^\d{10}$/;
    if (formData.phone_number && !phoneRegex.test(formData.phone_number)) {
      newErrors.phone_number = 'Invalid phone number format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    // console.log()
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly.', {
        position: "top-center",
        theme: "colored"
      });
      return;
    }

    console.log(formData);
    try {
      const response = await fetch("https://api.ignus.co.in/api/accounts/pre-register/", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        toast.success("Registered Successfully", {
          position: "top-center",
          theme: "colored"
        });
        setTimeout(() => {
          navigate('/');
        
        }, 5000)
      } else {
        toast.error(data["email"][0], {
          position: "top-center",
          theme: "colored"
        })
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className='pre-registration-body'>
      <div className="pre-reg-container" id="pre-reg-container">
        <div className="pre-reg-form-container pre-reg-sign-in-container">
          <form >
            <h1>Pre-Registration</h1>
            <input
              type="text"
              placeholder="Full Name"
              required
              name="fullName"
              onChange={(e) => handleInputChange('full_name', e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}"
              required
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            {errors.email && <p className="pre-reg-error-msg">{errors.email}</p>}
            <input
              type="tel"
              required
              placeholder="Phone Number"
              name="phoneNumber"
              maxLength="10"
              minLength="10"
              onChange={(e) => handleInputChange('phone_number', e.target.value)}
              />
              {errors.phone_number && <p className="pre-reg-error-msg">{errors.phone_number}</p>}
            <input
              type="text"
              placeholder="College Name"
              name="collegeName"
              required
              onChange={(e) => handleInputChange('college', e.target.value)}
            />


            <select name="state" id="state" placeholder="College State" required
              onChange={(e) => handleInputChange('college_state', e.target.value)}
            >
              <option value="" disabled selected>College State</option>
              <option value="1">Andhra Pradesh</option>
              <option value="2">Arunachal Pradesh</option>
              <option value="3">Assam</option>
              <option value="4">Bihar</option>
              <option value="5">Chhattisgarh</option>
              <option value="6">Goa</option>
              <option value="7">Gujarat</option>
              <option value="8">Haryana</option>
              <option value="9">Himachal Pradesh</option>
              <option value="10">Jammu & Kashmir</option> {/* Added this line */}
              <option value="11">Jharkhand</option>
              <option value="12">Karnataka</option>
              <option value="13">Kerala</option>
              <option value="14">Madhya Pradesh</option>
              <option value="15">Maharashtra</option>
              <option value="16">Manipur</option>
              <option value="17">Meghalaya</option>
              <option value="18">Mizoram</option>
              <option value="19">Nagaland</option>
              <option value="20">Odisha</option>
              <option value="21">Punjab</option>
              <option value="22">Rajasthan</option>
              <option value="23">Sikkim</option>
              <option value="24">Tamil Nadu</option>
              <option value="25">Telangana</option>
              <option value="26">Tripura</option>
              <option value="27">Uttar Pradesh</option>
              <option value="28">Uttarakhand</option>
              <option value="29">West Bengal</option>
              <option value="30">Andaman and Nicobar Islands</option>
              <option value="31">Chandigarh</option>
              <option value="32">Dadra and Nagar Haveli and Daman and Diu</option>
              <option value="33">Daman and Diu</option>
              <option value="34">Lakshadweep</option>
              <option value="35">Delhi</option>
              <option value="36">Puducherry</option>
            </select>

            <select name="year" id="year" required
              onChange={(e) => handleInputChange('current_year', e.target.value)}
            >
              <option value="" disabled selected>Current Year</option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Fourth Year</option>
              <option value="5">Fifth Year</option>
              <option value="6">Other</option>
            </select>

            <button type="submit" className='pre-reg-ghost' id='pre-reg-signUp' onClick={handleSubmit}>Submit</button>
          </form>

        </div>
        <div className="pre-reg-form-overlay-container">
          <div className="pre-reg-form-overlay">
            <div className="pre-reg-form-overlay-panel pre-reg-form-overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Join the Ignus Family today !</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default PrergForm;
// import {
//   Anchor,
//   Button,
//   Checkbox,
//   Container,
//   Group,
//   Paper,
//   PasswordInput,
//   Text,
//   TextInput,
//   Title,
// } from '@mantine/core';
// import classes from './AuthenticationTitle.module.css';

// export function PrergForm() {
//   return (
//     <Container size={420} style={{ marginTop: '40px' }}>
//       <Title align="center" className={classes.title}>
//         Welcome back!
//       </Title>
//       <Text color="dimmed" size="sm" align="center" style={{ marginTop: '5px' }}>
//         Do not have an account yet?{' '}
//         <Anchor size="sm" component="button">
//           Create account
//         </Anchor>
//       </Text>

//       <Paper withBorder shadow="md" padding={30} style={{ marginTop: '30px', borderRadius: '8px' }}>
//         <TextInput label="Email" placeholder="you@mantine.dev" required />
//         <PasswordInput label="Password" placeholder="Your password" required style={{ marginTop: '16px' }} />
//         <Group position="apart" style={{ marginTop: '20px' }}>
//           <Checkbox label="Remember me" />
//           <Anchor component="button" size="sm">
//             Forgot password?
//           </Anchor>
//         </Group>
//         <Button fullWidth style={{ marginTop: '24px' }}>
//           Sign in
//         </Button>
//       </Paper>
//     </Container>
//   );
// }