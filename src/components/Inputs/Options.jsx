import {useFormRegister } from "../../context/formRegisterContext"

export default function CheckBox({inputLabelTitle, options}){
  const register = useFormRegister();

    return (
        <div className="mt-10">
        
      <label htmlFor="location" className="block text-lg font-medium text-gray-900">
        {inputLabelTitle}
      </label>
      <select
        id="location"
        name="location"
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        defaultValue="Canada"
        {...register(`${inputLabelTitle}`)}
        >
        {options.map((optionItem, itemIdx) => {
            return (<option key={itemIdx}>{optionItem}</option>)
         })} 
      </select>
    </div>
        



      )

} 