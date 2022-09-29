import rawData from './data.json';
import TextBox from './components/Inputs/TextBox';
import InputBox from './components/Inputs/InputBox';
import CheckBox from './components/Inputs/CheckBox';
import RadioBox from './components/Inputs/RadioBox';
import Options from './components/Inputs/Options';
import { useForm } from "react-hook-form";
import {FormRegisterContextProvider} from "./context/formRegisterContext"


function App() {
  console.log(rawData)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  console.log(watch()); // watch input value by passing the name of it

  const onSubmit = data => {
    console.log(data); 
    alert("Submitting data");

    alert(JSON.stringify(data));
  
  };

  return (
      <FormRegisterContextProvider register={register}>
        <div className='max-w-3xl m-auto py-10 mt-10 px-10 divide-y divide-gray-200  opacity-100  shadow-sm shadow-black'>
          <div className='space-y-6 divide-y-2'>
            <h1 className="text-3xl font-bold">
              {rawData.formTitle}
            </h1>
          </div>
            
          <p className="text-base font-medium text-gray-900">
            by {rawData.ownerName}
          </p>
          
          {rawData.sections.map(
            (form) => {
              return (
                <form onSubmit={handleSubmit(onSubmit)}>
                {form.questions.map(
                    
                    (question) => {
                      switch (question.type) {
                        case "TextField":
                          return (
                          <TextBox inputLabelTitle={question.title} 
                          label={question.title.replaceAll(' ', "_")}/>)
                          
                          case "Input":
                            return (
                            <InputBox inputLabelTitle={question.title} placeholder={question.placeholder}
                            label={question.title.replaceAll(' ', "_")}/>)
                          case "Checkbox":
                            return (
                              <CheckBox inputLabelTitle={question.title} options={question.choices}/>
                            )
                          case "Radio":
                              return (
                                <RadioBox inputLabelTitle={question.title} options={question.choices}/>
                              )
                          case "Options":
                                return (
                                  <Options inputLabelTitle={question.title} options={question.choices}/>
                                )          
                        default:
                          break;
                      }
                    }
                    
                  )}
                   <button
                    className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded"
                    type="submit" > Submit 
                    </button>
                </form>
              )

            }
              
            )}
        </div>
    </FormRegisterContextProvider>
   
  );
}

export default App;
