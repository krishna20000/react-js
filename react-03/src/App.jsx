import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    email: "",
    course: "",
    college: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Store submitted data to display below
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950">
      <div className="bg-white p-6 rounded-lg shadow-md w-90">
        <h2 className="text-xl font-bold mb-4 text-center">React Form</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Course:</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">College:</label>
            <select
              name="college"
              value={formData.college}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select College</option>
              <option value="iit">IIT</option>
              <option value="nit">NIT</option>
              <option value="iiit">IIIT</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
        </div>

        
        {submittedData && (
          <div className="mt-4 p-4 ml border rounded bg-gray-100">
            <h3 className="text-lg font-semibold">Submitted Data:</h3>
            <p>Username: {submittedData.username}</p>
            <p>Age: {submittedData.age}</p>
            <p>Email: {submittedData.email}</p>
            <p>Course: {submittedData.course}</p>
            <p>College: {submittedData.college}</p>
          </div>
        )}
      
    </div>
  );
}

export default App;
