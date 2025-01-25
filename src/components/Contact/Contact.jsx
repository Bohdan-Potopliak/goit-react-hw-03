import s from "./Contact.module.css";
import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import PropTypes from "prop-types";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={s.container}>
      <p className={s.contactName}>
        <IoMdContact />
        {name}
      </p>
      <p className={s.contactNumber}>
        <FaPhone />
        {number}
      </p>
      <button className={s.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
