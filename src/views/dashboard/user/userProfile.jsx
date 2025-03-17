import { useState } from "react";
import { CheckCircle, Edit, Save, User, Mail, Phone, Calendar } from "lucide-react";

const UserProfile = () => {
    const [lastName, setLastName] = useState("Coop");
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
                <div className="flex items-center space-x-4 mb-6">
                    <img
                        src="https://via.placeholder.com/60"
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <button className="text-gray-600 hover:text-gray-800">Edit</button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm text-gray-600">First Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                value="Jane"
                                readOnly
                                className="w-full p-2 border rounded-lg bg-gray-200"
                            />
                            <User className="absolute right-3 top-3 h-4 w-4 text-gray-500" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600">Last Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full p-2 border rounded-lg"
                            />
                            {isEditing ? (
                                <Save
                                    onClick={() => setIsEditing(false)}
                                    className="absolute right-3 top-3 h-4 w-4 text-green-500 cursor-pointer"
                                />
                            ) : (
                                <Edit
                                    onClick={() => setIsEditing(true)}
                                    className="absolute right-3 top-3 h-4 w-4 text-gray-500 cursor-pointer"
                                />
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                value="jane234@example.com"
                                readOnly
                                className="w-full p-2 border rounded-lg bg-gray-200"
                            />
                            <Mail className="absolute right-3 top-3 h-4 w-4 text-gray-500" />
                            <CheckCircle className="absolute right-8 top-3 h-4 w-4 text-green-500" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600">Phone Number</label>
                        <div className="relative">
                            <input
                                type="text"
                                value="(209) 555-0104"
                                readOnly
                                className="w-full p-2 border rounded-lg bg-gray-200"
                            />
                            <Phone className="absolute right-3 top-3 h-4 w-4 text-gray-500" />
                            <CheckCircle className="absolute right-8 top-3 h-4 w-4 text-green-500" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600">Date of Birth</label>
                        <div className="relative">
                            <input
                                type="text"
                                value="17 Nov, 1996"
                                readOnly
                                className="w-full p-2 border rounded-lg bg-gray-200"
                            />
                            <Calendar className="absolute right-3 top-3 h-4 w-4 text-gray-500" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600">Country</label>
                        <input
                            type="text"
                            value="Bangladesh"
                            readOnly
                            className="w-full p-2 border rounded-lg bg-gray-200"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-sm text-gray-600 flex items-center justify-between">
                        Bio
                        <Edit className="h-4 w-4 text-gray-500 cursor-pointer" />
                    </label>
                    <textarea
                        className="w-full p-2 border rounded-lg bg-gray-200"
                        readOnly
                        rows="3"
                    >
                        Passionate about connecting businesses with the goodness of nature! 🌱 I'm on a mission to make organic food, medicine, fruits, and FMCG products easily accessible to B2B partners. 🍃 Health and sustainability drive my business ethos. ✨ I love working closely with businesses that share our values. Let's grow together! 🚀
                    </textarea>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
