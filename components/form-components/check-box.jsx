export const CheckBox = ({ label, name }) => {
  return (
    <div className='flex items-center gap-3'>
      <input type='checkbox' id={name} className='rounded' />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
