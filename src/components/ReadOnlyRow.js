import React from "react";
import Button from '@mui/material/Button';
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
      <Button variant="contained" type="button"  onClick={(event) => handleEditClick(event, contact)}>Edit</Button>
        {/* <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button> */}
        <Button variant="contained" type="button"  onClick={() => handleDeleteClick(contact.id)}> Delete</Button>
        {/* <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button> */}
      </td>
    </tr>
  );
};

export default ReadOnlyRow;