export const Radio = ({ label, id, name }) => {
  return (
    <div className='flex items-center gap-3'>
      <input type='radio' id={id} name={name} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
