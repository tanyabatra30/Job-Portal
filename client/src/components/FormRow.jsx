const FormRow = ({ type, name, labelText, defaultValue, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue || ""}
        onChange={onChange}
        required
      />
    </div>
  );
};
export default FormRow;
// import React from 'react'

// const FormRow = ({type,name,labelText, defaultValue}) => {
//   return (
//     <div className="form-row">
//       <label htmlFor={name} className="form-label">
//         {labelText||name}
//       </label>
//       <input
//         type={type}
//         id={name}
//         name={name}
//         className="form-input"
//         defaultValue={defaultValue||"Enter your name"}
//         required
//       />
//     </div>
//   );
// }

// export default FormRow
