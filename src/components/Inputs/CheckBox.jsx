import useContext from "react"
import {useFormRegister } from "../../context/formRegisterContext"

export default function CheckBox({inputLabelTitle, options}){
  const register = useFormRegister();

    return (
        <div className=" mt-10">
          <legend className="text-lg font-medium text-gray-900">{inputLabelTitle}</legend>
          <div className="mt-4 divide-y divide-dashed divide-stone-600 border-t border-b border-gray-200">
            {options.map((optionItem, itemIdx) => (
              <div key={itemIdx} className="relative flex items-start py-4">
                <div className="min-w-0 flex-1 text-sm">
                  <label htmlFor={`optionItem-${optionItem}`} className="select-none font-medium text-gray-700">
                    {optionItem}
                  </label>
                </div>
                <div className="ml-3 flex h-5 items-center">
                  <input
                    id={`optionItem-${optionItem}`}
                    name={`optionItem-${optionItem}`}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    {...register(`${optionItem}`)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )

} 