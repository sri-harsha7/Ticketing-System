import React, { useRef } from "react";
import styles from "./AddTeamMember.module.css";

const AddTeamMember = ({ onSave, onCancel }) => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const designationRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMember = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      designation: designationRef.current.value,
    };

    onSave(newMember);

    // Clear form
    usernameRef.current.value = "";
    emailRef.current.value = "";
    designationRef.current.value = "member";
  };

  return (
    <div className={styles.addTeamMember}>
      <h1>Add Team Member</h1>
      <div>
        <p>
          Talk with colleagues in a group chat. Messages in this group are only
          visible to its participants. New teammates may only be invited by the
          administrators.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            placeholder="User Name"
            ref={usernameRef}
            required
          />

          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            placeholder="Email ID"
            ref={emailRef}
            required
          />

          <label htmlFor="designation">Designation</label>
          <select
            ref={designationRef}
            id="designation"
            defaultValue="member"
            className={styles.designation}
          >
            <option value="member">Member</option>
            <option value="admin">Admin</option>
          </select>

          <div className={styles.buttons}>
            <button type="button" className={styles.cancel} onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className={styles.save}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeamMember;
