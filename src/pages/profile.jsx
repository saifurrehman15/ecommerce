import { useContext, useEffect, useState } from "react";
import AppButton from "../components/Button";
import { userInfo } from "../Context/userContext";
import {
  auth,
  createUserWithEmailAndPassword,
  db,
  setDoc,
  doc,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "../utils/firebase";
import { updateDoc } from "firebase/firestore";

function ProfileEdit() {
  const { userData, setUser } = useContext(userInfo);
  const { email, users, uid, phoneNumbers, bio, avatar } = userData;
  const [Bio, setBio] = useState("");
  const [nameOfUser, setUserName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [avatars, setAvatar] = useState("");
  const [loader, setLoading] = useState(false);
  console.log(image);

  const addImage = () => {
    const storageRef = ref(storage, `users/${uid}`);
    uploadBytes(storageRef, image)
      .then(() => {
        console.log("Image uploaded successfully");
      })
      .catch((error) => {
        console.error("Error uploading image: ", error);
      });
    getDownloadURL(storageRef).then(async (url) => {
      // Insert url into an <img> tag to "download"
      console.log(url);
      const docRef = doc(db, "users", uid);
      await updateDoc(docRef, { avatar: url });
      setUser({ ...userData, avatar: url });
    });
  };
  const updateProfile = async () => {
    setLoading(true);
    const docRef = doc(db, "users", uid);
    console.log(docRef);
    const objUsers = {
      users: nameOfUser,
      email,
      uid,
      phoneNumbers: phone,
      bio: Bio,
    };
    await setDoc(docRef, objUsers);
    setUser({ ...userData, ...objUsers });
    setImage("")
    setLoading(false);
  };
  useEffect(() => {
    if (users) {
      setUserName(users);
    }
  }, [users]);
  useEffect(() => {
    if (avatar) {
      setAvatar(avatar);
    }
  }, [avatar]);

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
    <div className="mx-auto border-1 border-gray-200 p-3 mt-[100px]  w-96 rounded">
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
      <div className="relative mb-4">
        <label
          htmlFor="image"
          className="h-28 overflow-hidden w-28 cursor-pointer flex items-center justify-center text-center border-1 border-dashed border-blue-300 rounded"
        >
          {image ? image.name : "Upload Image"}
          <input
            type="file"
            hidden
            id="image"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </label>
      </div>
      <button
        className={
          "bg-blue-500 w-full h-10 rounded text-white hover:bg-green-400"
        }
        onClick={() => {
          updateProfile();
          addImage();
        }}
      >
        {loader ? "loading..." : "Update Profile"}
      </button>
    </div>
  );
}

export default ProfileEdit;
