import React, { useState } from "react";
import Profile from "../../assets/profile.png";
import DeleteTeamMember from "./DeleteTeamMember";

const TeamMember = ({ id, fullName, email, role, onDelete }) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleConfirmDelete = () => {
    onDelete(id);
    setShowDeleteConfirmation(false);
  };

  return (
    <div>
      <div className="row" style={{ fontSize: "20px" }}>
        <div className="col-2">
          <img src={Profile} alt="" />
        </div>
        <div className="col-2">{fullName}</div>
        <div className="col-2">+1 (000) 000-0000</div>
        <div className="col-2">{email}</div>
        <div className="col-2">{role}</div>
        <div className="col-2" style={{ display: "flex", gap: "30px" }}>
          <div>
            <i className="bi bi-pencil-square"></i>
          </div>
          <div onClick={handleDeleteClick}>
            <i className="bi bi-trash"></i>
            {showDeleteConfirmation && (
              <DeleteTeamMember
                onCancel={handleCancelDelete}
                onConfirm={handleConfirmDelete}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
