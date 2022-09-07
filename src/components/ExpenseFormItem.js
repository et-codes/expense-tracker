import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ExpenseFormItem = (props) => {
  const {
    label,
    type,
    placeholder,
    handleChange,
    value
  } = { ...props };
  let contents;

  if (type === 'currency') {
    contents = (
      <InputGroup className="mb-3" hasValidation>
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control
          type="number"
          step="any"
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          required
        />
      </InputGroup>
    );
  } else {
    contents = (
      <Form.Control
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        required
      />
    );
  }

  return (
    <Form.Group className="mb-3">
      <Form.Label className="d-none d-sm-block">{label}</Form.Label>
      {contents}
    </Form.Group>
  );
}

export default ExpenseFormItem;