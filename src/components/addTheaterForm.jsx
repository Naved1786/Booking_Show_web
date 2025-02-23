import { useState } from "react";
import axios from "axios";

export default function AddTheaterForm() {
  const [loading, setLoading] = useState(false);
  const [theater, setTheater] = useState({
    name: "",
    location: "",
    city: "",
    state: "",
    postalCode: "",
    contactNo: "",
    capacity: "",
    screens: "",
    operatingHours: "",
  });

  const handleChange = (e) => {
    setTheater({ ...theater, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:1111/api/theater/create", theater, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === 200) {
        alert("Theater added successfully!");
        setTheater({ 
          name: "", location: "", city: "", state: "", postalCode: "", 
          contactNo: "", capacity: "", screens: "", operatingHours: "" 
        });
      } else {
        alert("Failed to add theater.");
      }
    } catch (error) {
      alert("An error occurred while submitting the form.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 items-center justify-center gap-6">
        <input type="text" name="name" placeholder="Theater Name" value={theater.name} onChange={handleChange} className="border p-3 rounded-lg w-full" required />
        <input type="text" name="location" placeholder="Location" value={theater.location} onChange={handleChange} className="border p-3 rounded-lg w-full" required />
        <input type="text" name="city" placeholder="City" value={theater.city} onChange={handleChange} className="border p-3 rounded-lg w-full" required />
        <input type="text" name="state" placeholder="State" value={theater.state} onChange={handleChange} className="border p-3 rounded-lg w-full" required />
        <input type="text" name="postalCode" placeholder="Postal Code" value={theater.postalCode} onChange={handleChange} className="border p-3 rounded-lg w-full" required />
        <input type="tel" name="contactNo" placeholder="Contact No" value={theater.contactNo} onChange={handleChange} className="border p-3 rounded-lg w-full" required pattern="[0-9]{10}" title="Enter a valid 10-digit number"/>
        <input type="number" name="capacity" placeholder="Capacity" value={theater.capacity} onChange={handleChange} className="border p-3 rounded-lg w-full" required min="1"/>
        <input type="number" name="screens" placeholder="Screens" value={theater.screens} onChange={handleChange} className="border p-3 rounded-lg w-full" required min="1"/>
        <div className="col-span-2">
          <input type="text" name="operatingHours" placeholder="Operating Hours (e.g., 10 AM - 10 PM)" value={theater.operatingHours} onChange={handleChange} className="border p-3 rounded-lg w-full" required />
        </div>
        <button type="submit" className={`w-full text-white py-2 rounded-md transition ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`} disabled={loading}>
          {loading ? "Submitting..." : "Add Theater"}
        </button>
      </form>
    </div>
  );
}
