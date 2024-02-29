
import React, { useState } from 'react';

const validateForm = () => {

    const [errors, setErrors] = useState({});
    let isValid = true;
    let newErrors = {};

    if (!userData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!userData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email.trim())) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!userData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(userData.mobile.trim())) {
      newErrors.mobile = 'Invalid mobile number';
      isValid = false;
    }

    if (!userData.father.trim()) {
      newErrors.father = 'Father\'s name is required';
      isValid = false;
    }

    if (!userData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (userData.password.trim().length < 8) {
      newErrors.password = 'Password should be at least 8 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  export default validateForm;