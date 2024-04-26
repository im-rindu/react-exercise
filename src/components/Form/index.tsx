import Field from "./Field";
import "./index.css";

function Form({title, fieldSet}) {
  return(
    <form>
      <h1>{title}</h1>
      <div className="fieldset">
        {
          fieldSet.map((fieldType) => 
            <Field id={fieldType.id} label={fieldType.label} type={fieldType.type} rows={fieldType.rows} placeholder={fieldType.placeholder} />)
        }
      <button>Submit</button>
      </div>
    </form>
  )
}

export default Form;