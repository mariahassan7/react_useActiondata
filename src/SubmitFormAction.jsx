import { useLoaderData, useActionData } from "react-router-dom";

async function SubmitFormAction({params, request}){
    const educative_form_data = await request.formData();
    const educative_employee_name = educative_form_data.get("educative_employee_name");
    const educative_employee_address = educative_form_data.get("educative_employee_address");
    const educative_employee_number = educative_form_data.get("educative_employee_number");
    return { educative_employee_name, educative_employee_address, educative_employee_number}
}

function  EducativePosts(){
    
    const {educative_employee_name, educative_employee_address,educative_employee_number } = useActionData();
    return (
        <div>
            Employee name: {educative_employee_name}
            Employee address: {educative_employee_address}
            Employee number: {educative_employee_number}
        </div>
    )
}
async function EduactivesPostLoader(){
    const {all_data} = useLoaderData();
    return all_data

}
// const export_variables = {EducativePosts, EduactivesPostLoader};
export {SubmitFormAction, EducativePosts, EduactivesPostLoader};

