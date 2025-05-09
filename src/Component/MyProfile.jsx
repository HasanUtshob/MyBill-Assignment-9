import React, { useContext, useState } from "react";
import { FaEdit, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email] = useState("johndoe@example.com");
  const [photo, setPhoto] = useState("https://i.pravatar.cc/150?img=3");
  const [tempName, setTempName] = useState(name);
  const [tempPhoto, setTempPhoto] = useState(photo);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(tempName);
    setPhoto(tempPhoto);
    setEditing(false);
  };

  return (
    <div className="min-h-[calc(100vh-116px)] flex justify-center items-center">
      <div className="w-[450px] mx-auto  bg-white rounded-xl shadow-lg p-6 text-center relative">
        <div className="relative w-32 h-32 mx-auto">
          <img
            src={user && user.photoURL}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
          />
          <button
            onClick={() => setEditing(!editing)}
            className="absolute bottom-1 right-1 bg-blue-500 text-white p-1 rounded-full hover:bg-blue-600"
          >
            <FaEdit size={16} />
          </button>
        </div>

        {editing && (
          <form onSubmit={handleSubmit} className="mt-4 space-y-2">
            <input
              type="text"
              placeholder="নাম লিখুন"
              className="input input-bordered w-full"
              onChange={(e) => setTempName(e.target.value)}
            />
            <input
              type="text"
              placeholder="ফটো URL"
              className="input input-bordered w-full"
              onChange={(e) => setTempPhoto(e.target.value)}
            />
            <button type="submit" className="btn btn-primary w-full">
              Save
            </button>
          </form>
        )}

        <h2 className="text-xl font-bold mt-4">{user && user.displayName}</h2>
        <p className="text-gray-500">{user && user.email}</p>

        <div className="flex justify-center gap-4 mt-4 text-gray-600">
          <a href="https://www.facebook.com/Shahriahasanutshob/">
            <FaFacebook size={24} />
          </a>
          <a href="https://x.com/Shahriarutshob6">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/ShahriarUtshob/#">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
