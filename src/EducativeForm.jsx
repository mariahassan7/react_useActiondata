import { useActionData, Form} from "react-router-dom";
function EducativeForm() {
  
    const educative_errors = useActionData();
    return (
      <Form method="post" action="/educative_forms">
        <p> Enter employee's name
          <input type="text" name="educative_employee_name"   />
        </p>
        <p> Enter employee's age
          <input type="text" name="educative_employee_age" />
        </p>
        <p>
          <button type="submit" >Submit</button>
        </p>
        {educative_errors && <p>{educative_errors.educative_employee_name}</p> }
        {educative_errors && <p>{educative_errors.educative_employee_age}</p> }
      </Form>
    );
  }
  
 async function EducativeFormAcion({ request }) {
    const educative_data = await request.formData();
    const educative_employee_age = educative_data.get("educative_employee_age");
    const educative_employee_name = educative_data.get("educative_employee_name");
    const educative_errors = {};
    if (!isNaN(educative_employee_name) || educative_employee_name === "" ){
      educative_errors.educative_employee_name = "Name must be a string, renter your name!"
    }
    if (isNaN(educative_employee_age) || educative_employee_age< 18 || educative_employee_age > 70 || educative_employee_age === ""){
      educative_errors.educative_employee_age = "Invalid age, must be a number between 18 and 70"
    }
    if (Object.keys(educative_errors).length) {
      return educative_errors;
    }
    return null
  };
  

export { EducativeForm, EducativeFormAcion}