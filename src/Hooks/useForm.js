import { useState } from "react";

export default function useForm(initialValues = {}) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setValues((prev) => ({ ...prev, [name]: files[0] }));
      return;
    }
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setValues(initialValues);

  return { values, handleChange, resetForm, setValues };
}
