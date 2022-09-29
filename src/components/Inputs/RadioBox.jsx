import {useFormRegister } from "../../context/formRegisterContext"

export default function RadioBox({inputLabelTitle, options}){
  const register = useFormRegister();

    return (
        <div className="mt-10">
          <label className="text-lg font-medium text-gray-900">{inputLabelTitle}</label>
          <fieldset className="mt-4">
            <legend className="sr-only">{inputLabelTitle}</legend>
            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
              {options.map((optionItem, itemIdx) => (
                <div key={itemIdx} className="flex items-center">
                  <input
                    id={itemIdx}
                    name="notification-method"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    {...register(`${inputLabelTitle}`)}
                    />
                  <label htmlFor={itemIdx} className="ml-3 block text-sm font-medium text-gray-700">
                    {optionItem}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      )

} 