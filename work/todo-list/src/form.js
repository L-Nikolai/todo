const Form = ({ onChange, onSubmit, value }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="todo" onChange={onChange} value={value} />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
