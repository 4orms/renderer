import {useFormRegister } from "../../context/formRegisterContext"

export default function TextBox({inputLabelTitle, label}){
  const register = useFormRegister();

  return  (
        <div className="mt-10">
          <label htmlFor={label} className="block text-lg font-medium text-gray-900">
            {inputLabelTitle}
          </label>
          <div className="mt-1">
            <textarea
              rows={4}
              name={label}
              id={label}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              defaultValue={''}
              {...register(`${inputLabelTitle}`)}

            />
          </div>
        </div>
      )
}