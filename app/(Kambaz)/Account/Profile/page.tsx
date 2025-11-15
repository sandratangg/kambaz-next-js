"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import * as client from "../client";
import { RootState } from "../../store";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  useEffect(() => {
    if (currentUser) {
      setProfile(currentUser);
    }
  }, [currentUser]);

  const updateProfile = async () => {
    try {
      const updatedProfile = await client.updateUser(profile);
      dispatch(setCurrentUser(updatedProfile));
      alert("Profile updated successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const signout = async () => {
    try {
      await client.signout();
      dispatch(setCurrentUser(null));
      router.push("/Account/Signin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <input
            value={profile.username || ""}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            className="form-control mb-2"
            placeholder="username"
          />
          <input
            value={profile.password || ""}
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
            className="form-control mb-2"
            placeholder="password"
            type="password"
          />
          <input
            value={profile.firstName || ""}
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
            className="form-control mb-2"
            placeholder="first name"
          />
          <input
            value={profile.lastName || ""}
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
            className="form-control mb-2"
            placeholder="last name"
          />
          <input
            value={profile.email || ""}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="form-control mb-2"
            placeholder="email"
            type="email"
          />
          <button onClick={updateProfile} className="btn btn-primary w-100 mb-2">
            Update
          </button>
          <button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}