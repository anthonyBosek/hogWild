import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", weight: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", weight: "" });
  };

  return (
    <form className="options" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Weight:
        <input
          type="text"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Hog</button>
    </form>
  );
};

export default Form;
