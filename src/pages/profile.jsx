import { useContext, useEffect, useState } from "react";
import AppButton from "../components/Button";
import { userInfo } from "../Context/userContext";
import {
  auth,
  createUserWithEmailAndPassword,
  db,
  setDoc,
  doc,
} from "../utils/firebase";

function ProfileEdit() {
  const { userData, setUser } = useContext(userInfo);
  const { email, users, uid, phoneNumbers, bio } = userData;
  const [Bio, setBio] = useState("");
  const [nameOfUser, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [loader, setLoading] = useState(false);

  const updateProfile = async () => {
    setLoading(true);
    const docRef = doc(db, "users", uid);
    console.log(docRef);
    const objUsers = {
      users:nameOfUser,
      email,
      uid,
      phoneNumbers: phone,
      bio: Bio,
    };
    await setDoc(docRef, objUsers);
    setUser({ ...userData, ...objUsers });
    setLoading(false);
  };
  useEffect(() => {
    if (users) {
      setUserName(users);
    }
  }, [users]);
  useEffect(() => {
    if (users) {
      setUserName(users);
    }
  }, [users]);

  useEffect(() => {
    if (phoneNumbers) {
      setPhone(phoneNumbers);
    }
  }, [phoneNumbers]);
  useEffect(() => {
    if (bio) {
      setBio(bio);
    }
  }, [bio]);

  return (
    <div className="mx-auto border-1 border-gray-200 p-3 mt-[100px]  w-86 rounded">
      <div className="relative mb-4">
        <label htmlFor="text" className="leading-7 text-sm ">
          User Name
        </label>
        <input
          type="text"
          value={nameOfUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          id="text"
          name="text"
          className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm ">
          Email
        </label>
        <input
          type="email"
          disabled
          value={email}
          id="email"
          name="email"
          className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm ">
          Phone Number
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          id="email"
          name="email"
          className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="Bio" className="leading-7 text-sm ">
          Bio
        </label>
        <textarea
          name=""
          id="Bio"
          value={Bio}
          onChange={(e) => {
            setBio(e.target.value);
          }}
          placeholder="Add Bio..."
          className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <button
        className={
          "bg-blue-500 w-full h-10 rounded text-white hover:bg-green-400"
        }
        onClick={() => {
          updateProfile();
        }}
      >
        {loader ? "loading..." : "Update Profile"}
      </button>
    </div>
  );
}

export default ProfileEdit;
