import "./index.css"

function Field(fieldType) {
  return(
    <div className="field">
      <label htmlFor={fieldType.id}>{fieldType.label}</label>
      
      <textarea id={fieldType.id} placeholder={fieldType.placeholder} rows={fieldType.rows} />
    </div>
  )
}

export default Field;