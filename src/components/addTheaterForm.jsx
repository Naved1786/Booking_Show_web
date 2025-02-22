import { useState } from "react";

export default function AddTheaterForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(theater);
  };

  return (
    
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 pt-28 ">
        <div className="col-span-1">
          <label className="block font-medium text-gray-700" htmlFor="name">Theater Name:</label>
          <input type="text" id="name" name="name" value={theater.name} onChange={handleChange} className="w-full  border rounded-lg" required />
        </div>
        <div className="col-span-1">
          <label className="block font-medium text-gray-700" htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={theater.location} onChange={handleChange} className="w-full  border rounded-lg" required />
        </div>
        <div className="col-span-1">
          <label className="block font-medium text-gray-700" htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={theater.city} onChange={handleChange} className="w-full  border rounded-lg" required />
        </div>
        <div className="col-span-1">
          <label className="block font-medium text-gray-700" htmlFor="state">State:</label>
          <input type="text" id="state" name="state" value={theater.state} onChange={handleChange} className="w-full  border rounded-lg" required />
        </div>
        <div className="col-span-1">
          <label className="block font-medium text-gray-700" htmlFor="postalCode">Postal Code:</label>
          <input type="text" id="postalCode" name="postalCode" value={theater.postalCode} onChange={handleChange} className="w-full  border rounded-lg" required />
        </div>
        <div className="col-span-1">
          <label className="block font-medium text-gray-700" htmlFor="contactNo">Contact No:</label>
          <input type="text" id="contactNo" name="contactNo" value={theater.contactNo} onChange={handleChange} className="w-full  border rounded-lg" required />
        </div>
        <div className="col-span-1">
          <label className="block font-medium text-gray-700" htmlFor="capacity">Capacity:</label>
          <input type="number" id="capacity" name="capacity" value={theater.capacity} onChange={handleChange} className="w-full  border rounded-lg" required />
        </div>
        <div className="col-span-1">
          <label className="block font-medium text-gray-700" htmlFor="screens">Screens:</label>
          <input type="number" id="screens" name="screens" value={theater.screens} onChange={handleChange} className="w-full  border rounded-lg" required />
        </div>
        <div className="col-span-2">
          <label className="block font-medium text-gray-700" htmlFor="operatingHours">Operating Hours:</label>
          <input type="text" id="operatingHours" name="operatingHours" value={theater.operatingHours} onChange={handleChange} className="w-full  border rounded-lg" required />
        </div>
        <div className="col-span-2 flex justify-center">
          <button type="submit" className="w-1/2 bg-blue-600 text-white  rounded-lg hover:bg-blue-700">Add Theater</button>
        </div>
      </form>
   
  );
}
