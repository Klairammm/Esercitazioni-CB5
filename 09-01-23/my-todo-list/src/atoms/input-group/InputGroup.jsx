import "./input-group.css";

export function InputGroup(props) {
  const { label = "", type = "text", ...attributes } = props;

  return (
    <label>
      <span>{label}</span>
      {type === "textarea" ? (
        <textarea {...attributes}></textarea>
      ) : (
        <input type={type} {...attributes} />
      )}
    </label>
  );
}
