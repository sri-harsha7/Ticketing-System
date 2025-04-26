import styles from "./DeleteTeamMember.module.css";

const DeleteTeamMember = ({ onCancel, onConfirm }) => {
  return (
    <div className={styles.deleteTeamMember}>
      <div>
        <p>This Team Member will be deleted</p>
      </div>
      <div className={styles.deleteButtons}>
        <button className={styles.cancel} onClick={onCancel}>
          Cancel
        </button>
        <button className={styles.delete} onClick={onConfirm}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteTeamMember;
