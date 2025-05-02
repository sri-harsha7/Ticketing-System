import React, { useState } from "react";
import styles from "./Team.module.css";
import TeamMember from "./TeamMember";
import AddTeamMember from "./AddTeamMember";

const Team = ({ teamMembers, onAddMember, onDeleteMember }) => {
  const [showAdd, setShowAdd] = useState(false);

  const toggleAddForm = () => setShowAdd(!showAdd);

  const addNewMember = (newMember) => {
    onAddMember(newMember);
    setShowAdd(false);
  };

  return (
    <div className={styles.team}>
      <h1>Team</h1>

      <div className={styles.grid}>
        <div className={styles.container}>
          {/* Header row */}
          <div
            className="row"
            style={{
              marginBottom: "20px",
              fontSize: "20px",
              border: "1px solid black",
            }}
          >
            <div className="col-2"></div>
            <div className="col-2">Full Name</div>
            <div className="col-2">Phone Number</div>
            <div className="col-2">Email</div>
            <div className="col-2">Role</div>
            <div className="col-6"></div>
          </div>

          {/* Team members list */}
          {teamMembers.map((member) => (
            <TeamMember
              key={member.id}
              id={member.id}
              fullName={member.fullName}
              phoneNumber={member.phoneNumber}
              email={member.email}
              role={member.role}
              onDelete={onDeleteMember}
            />
          ))}
        </div>

        {/* Add member button and form */}
        <div className={styles.add}>
          <button className={styles.button} onClick={toggleAddForm}>
            (+) Add Team Member
          </button>
          {showAdd && (
            <AddTeamMember onSave={addNewMember} onCancel={toggleAddForm} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
