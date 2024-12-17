import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { createStudent, deleteStudent, fetchData } from "../api/student";

function FormInput({ setStudents, students }) {
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addStudent = async (e) => {
    e.preventDefault();

    const data = await createStudent(formData);

    setStudents((prev) => [...prev, { id: prev.length + 1, data }]);
    fetchData().then((data) => setStudents(data));
    console.log(data);
  };

  const deleteStudents = async () => {
    try {
      console.log(students);
      const id = "6738ddf31614c2683b0ce120";
      await deleteStudent(id);
      fetchData().then((data) => setStudents(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
          backgroundColor: "#f5f5f5",
        }}
        onSubmit={addStudent}
      >
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          label="FullName"
          variant="outlined"
          name="fullName"
        />
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          label="Age"
          variant="outlined"
          name="age"
        />
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
        />
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          label="Class"
          variant="outlined"
          name="class"
        />
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          label="Year"
          variant="outlined"
          name="year"
        />

        <Button variant="contained" type="submit">
          Submit
        </Button>
        <Button variant="contained" type="button" onClick={deleteStudents}>
          Delete
        </Button>
      </form>
    </>
  );
}

export default FormInput;
