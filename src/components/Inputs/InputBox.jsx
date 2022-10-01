import {useFormRegister } from "../../context/formRegisterContext"

export default function InputBox({inputLabelTitle, label, placeholder}){
  const register = useFormRegister();
  label = label.replaceAll(' ', "_")

    return (<div className="mt-10">
      <label 
        htmlFor={label} className="block text-lg font-medium text-gray-900">
        {inputLabelTitle}
      </label>
      <div className="mt-1">
        <input
          type="text"
          name={label}
          id={label}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder={placeholder}
          {...register(`${label}`)}

          />
      </div>
    </div>)
}