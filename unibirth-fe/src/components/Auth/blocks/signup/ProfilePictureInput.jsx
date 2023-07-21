import React, { useState } from "react";

const ProfilePictureInput = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handlePictureChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file from the input

    // You can perform additional validations here, e.g., checking file type and size

    setProfilePicture(file); // Update the profilePicture state with the selected file
  };

  return (
    <div className="content-center flex flex-col justify-center items-center">
      <label htmlFor="profile-picture">프로필 이미지</label>
      <input
        type="file"
        id="profile-picture"
        accept="image/*"
        onChange={handlePictureChange}
      />
      {profilePicture && (
        <img
          src={URL.createObjectURL(profilePicture)}
          alt="Profile"
          style={{ width: "100px" }}
        />
      )}
    </div>
  );
};

export default ProfilePictureInput;
