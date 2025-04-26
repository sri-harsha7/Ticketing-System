// import React from "react";
// import styles from "./Team.module.css";
// import TeamMember from "./TeamMember";
// import AddTeamMember from "./AddTeamMember";
// import { useState } from "react";

// const Team = () => {
//   const [showAdd, setShowAdd] = useState(false);
//   const handleAdd = () => {
//     if (showAdd) {
//       setShowAdd(false);
//     } else {
//       setShowAdd(true);
//     }
//   };
//   return (
//     <div className={styles.team}>
//       <div>
//         <h1>Team</h1>
//       </div>
//       <div className={styles.grid}>
//         <div class="container" className={styles.container}>
//           <div
//             class="row"
//             style={{
//               border: "1px solid gray",

//               fontSize: "20px",
//             }}
//           >
//             <div class="col-2"></div>
//             <div class="col-2">Full Name</div>
//             <div class="col-2">Phone Number</div>
//             <div class="col-2">Email</div>
//             <div class="col-2">Role</div>
//             <div class="col-6"></div>
//           </div>
//           <TeamMember></TeamMember>
//           <TeamMember></TeamMember>
//           <TeamMember></TeamMember>
//         </div>
//         <div className={styles.add}>
//           <button className={styles.button} onClick={handleAdd}>
//             (+) Add Team Member
//           </button>
//           {showAdd && <AddTeamMember></AddTeamMember>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;

// import React, { useState } from "react";
// import styles from "./Team.module.css";
// import TeamMember from "./TeamMember";
// import AddTeamMember from "./AddTeamMember";

// const Team = () => {
//   const [showAdd, setShowAdd] = useState(false);
//   const [teamMembers, setTeamMembers] = useState([
//     {
//       id: 1,
//       fullName: "John Doe",
//       phoneNumber: "+1(000) 000-0000",
//       email: "example@gmail.com",
//       role: "Admin",
//     },
//   ]);

//   const toggleAddForm = () => setShowAdd(!showAdd);

//   const addNewMember = (newMember) => {
//     const memberToAdd = {
//       id: Date.now(), // Better unique ID
//       fullName: newMember.username,
//       phoneNumber: "+1(000) 000-0000", // Default, can add field later
//       email: newMember.email,
//       role: newMember.designation === "admin" ? "Admin" : "Member",
//     };

//     setTeamMembers([...teamMembers, memberToAdd]);
//     setShowAdd(false);
//   };

//   return (
//     <div className={styles.team}>
//       <h1>Team</h1>

//       <div className={styles.grid}>
//         <div className={styles.container}>
//           {/* Header row */}
//           <div
//             className="row"
//             style={{ border: "1px solid gray", fontSize: "20px" }}
//           >
//             <div className="col-2"></div>
//             <div className="col-2">Full Name</div>
//             <div className="col-2">Phone Number</div>
//             <div className="col-2">Email</div>
//             <div className="col-2">Role</div>
//             <div className="col-6"></div>
//           </div>

//           {/* Team members list */}
//           {teamMembers.map((member) => (
//             <TeamMember
//               key={member.id}
//               fullName={member.fullName}
//               phoneNumber={member.phoneNumber}
//               email={member.email}
//               role={member.role}
//             />
//           ))}
//         </div>

//         {/* Add member button and form */}
//         <div className={styles.add}>
//           <button className={styles.button} onClick={toggleAddForm}>
//             (+) Add Team Member
//           </button>
//           {showAdd && (
//             <AddTeamMember onSave={addNewMember} onCancel={toggleAddForm} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;

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
            style={{ border: "1px solid gray", fontSize: "20px" }}
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
