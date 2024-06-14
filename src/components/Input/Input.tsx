import "./Input.css";

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  disabled?: boolean;
}

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  disabled,
}: InputProps) => {
  if (label === "Status")
    return (
      <label>
        <div className="select-label">
          <span>{label}</span>
          <select
            name="status"
            value={value}
            onChange={onChange}
            required
            disabled={disabled}
          >
            <option value="" disabled>
              Selecione um status
            </option>
            <option value="Em estoque">Em estoque</option>
            <option value="Sem estoque">Sem estoque</option>
            <option value="Em trânsito">Em trânsito</option>
          </select>
        </div>
      </label>
    );

  if (label === "Código-edit")
    return (
      <label>
        <div className="label-edit">
          <span>Código</span>
          <div className="input-code-edit">
            <p># </p>
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              required
              disabled={disabled}
            />
          </div>
        </div>
      </label>
    );

  return (
    <label>
      <div className="label">
        <span>{label}</span>
        <div className="input-code">
          {label === "Código" ? <p># </p> : <p></p>}
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required
            disabled={disabled}
          />
        </div>
      </div>
    </label>
  );
};

export default Input;
