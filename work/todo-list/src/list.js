const ListItem = ({ text, dispath, id, checked }) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => dispath({ type: "checked", payload: id })}
      />
      <span className={checked ? "checked" : "not-checked"}>{text}</span>
      <button onClick={() => dispath({ type: "delete", payload: id })}>
        delete
      </button>
    </div>
  );
};

const List = ({ state, dispath }) => {
  return state.map((item) => (
    <ListItem
      key={item.id}
      text={item.listText}
      dispath={dispath}
      id={item.id}
      checked={item.checked}
    />
  ));
};
export default List;
