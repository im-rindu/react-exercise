import {Button} from "../";
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
      <Button buttonName="Submit" buttonType="square" buttonColor="dark" buttonSize="regular" />
      </div>
    </form>
  )
}

export default Form;