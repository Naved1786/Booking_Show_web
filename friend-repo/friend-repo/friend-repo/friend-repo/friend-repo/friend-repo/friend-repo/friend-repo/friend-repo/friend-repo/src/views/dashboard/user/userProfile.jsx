import React, { useState, useRef } from "react";
import { User, Mail, Phone, Calendar, Edit, CheckCircle, Globe } from "lucide-react";
import { AiOutlineCamera, AiOutlineEdit, AiOutlineSave, AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/store/slices/authSlice";

const UserProfile = () => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const fileInputRef = useRef(null);
    const [image, setImage] = useState(() => {
        return localStorage.getItem("profileImage") || "/images/dummy-img.jpg";
    });

    const user = useSelector((state) => state.auth.user);

    const [formData, setFormData] = useState({
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        email: user?.email || "",
        phoneNo: user?.phoneNo || "",
        dob: user?.dob || "",
        country: user?.country || "",
        bio: user?.bio || ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleEditClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);
        formData.append("id", user.id);

        try {
            const response = await axios.post("http://localhost:1111/cloudinary/upload", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (response.status === 200) {
                const newImage = response.data.user.image;
                setImage(newImage);
                dispatch(login(response?.data?.user));
                localStorage.setItem("profileImage", newImage);
            } else {
                alert("Failed to upload image.");
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    const handleSubmit = async (id) => {
        try {
            const response = await axios.put(`http://localhost:1111/api/user/update/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            if (response.status === 200) {
                dispatch(login(response?.data?.user));
                setIsEditing(false);
            }
            else {
                alert("Profile update failed!");
            }
        } catch (error) {
            console.log("Error while updating profile:", error);
        }
    };

    const toggleEditMode = () => {
        setIsEditing(!isEditing);

        if (isEditing) {
            setFormData({
                firstName: user?.firstName || "",
                lastName: user?.lastName || "",
                email: user?.email || "",
                phoneNo: user?.phoneNo || "",
                dob: user?.dob || "",
                country: user?.country || "",
                bio: user?.bio || ""
            });
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">My Profile</h2>
                <button
                    onClick={toggleEditMode}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg ${isEditing
                            ? "bg-red-100 text-red-600 hover:bg-red-200"
                            : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                        }`}
                >
                    {isEditing ? (
                        <>
                            <AiOutlineClose size={16} />
                            <span>Cancel</span>
                        </>
                    ) : (
                        <>
                            <AiOutlineEdit size={16} />
                            <span>Edit</span>
                        </>
                    )}
                </button>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
                {/* Banner and Profile Image */}
                <div className="h-28 bg-gradient-to-r from-red-500 to-red-400 relative">
                    <div className="absolute -bottom-12 left-6">
                        <div className="relative w-24 h-24">
                            <div className="w-full h-full rounded-full border-3 border-white bg-white overflow-hidden shadow-lg">
                                <img
                                    src={user?.image || image}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <button
                                className="absolute bottom-1 right-1 bg-gray-800 bg-opacity-70 text-white p-1.5 rounded-full hover:bg-opacity-90"
                                onClick={handleEditClick}
                            >
                                <AiOutlineCamera size={14} />
                            </button>

                            <input
                                type="file"
                                ref={fileInputRef}
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="pt-16 px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">First Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={isEditing ? formData.firstName : user?.firstName}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`w-full p-2.5 border rounded-lg ${isEditing ? "bg-white border-blue-300" : "bg-gray-50 border-gray-200"}`}
                                />
                                <User className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="lastName"
                                    value={isEditing ? formData.lastName : user?.lastName}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`w-full p-2.5 border rounded-lg ${isEditing ? "bg-white border-blue-300" : "bg-gray-50 border-gray-200"}`}
                                />
                                <User className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={isEditing ? formData.email : user?.email}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`w-full p-2.5 border rounded-lg ${isEditing ? "bg-white border-blue-300" : "bg-gray-50 border-gray-200"}`}
                                />
                                <Mail className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                                <CheckCircle className="absolute right-8 top-2.5 h-3 w-3 text-green-500" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="phoneNo"
                                    value={isEditing ? formData.phoneNo : user?.phoneNo}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`w-full p-2.5 border rounded-lg ${isEditing ? "bg-white border-blue-300" : "bg-gray-50 border-gray-200"}`}
                                />
                                <Phone className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                                <CheckCircle className="absolute right-8 top-2.5 h-3 w-3 text-green-500" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Date of Birth</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="dob"
                                    value={isEditing ? formData.dob : user?.dob}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`w-full p-2.5 border rounded-lg ${isEditing ? "bg-white border-blue-300" : "bg-gray-50 border-gray-200"}`}
                                />
                                <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Country</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="country"
                                    value={isEditing ? formData.country : user?.country}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`w-full p-2.5 border rounded-lg ${isEditing ? "bg-white border-blue-300" : "bg-gray-50 border-gray-200"}`}
                                />
                                <Globe className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Bio</label>
                        <textarea
                            name="bio"
                            value={isEditing ? formData.bio : user?.bio}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className={`w-full p-2.5 border rounded-lg ${isEditing ? "bg-white border-blue-300" : "bg-gray-50 border-gray-200"}`}
                            rows="3"
                            placeholder="Tell us about yourself..."
                        />
                    </div>

                    {isEditing && (
                        <div className="mt-5 flex justify-end">
                            <button
                                onClick={() => handleSubmit(user?.id)}
                                className="flex items-center gap-1.5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            >
                                <AiOutlineSave size={16} />
                                Save Changes
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;