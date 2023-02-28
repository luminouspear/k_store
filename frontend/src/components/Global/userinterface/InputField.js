import { trusted } from 'mongoose'
import React from 'react'

const InputField = (props) => {

    //Checks if all fields are filled and if an @ sign is used in the email field.

    const validateInput = values => {
        if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
            return true
        } else {
            return false
        }
    }

    if (props.type === "submit") {
        return (<input
            className={`w-full py-4 mt-6 text-2xl font-bold rounded-full md:w-8/12 md:py-6 lg:text-3xl  shadow-kyellow4 cursor-pointer ${validateInput(props.formValues) ? 'bg-kcyan/100 hover:shadow-kmag4' : 'bg-kcyan/100 hover:shadow-kmag4'}`}
            type="submit"
            value={props.label}
            disabled={validateInput(props.formValues)}
        />)
    } else if (props.type === "textarea") {
        return (
            <label className="w-full rounded-xl" >
                {props.visibleLabel && props.label}
                <textarea
                    className="w-full h-48 px-6 py-4 mt-6 text-2xl md:w-full md:py-6 rounded-3xl text-kblack placeholder:text-2xl placeholder:text-kblack/60 "
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.required}
                    rows={7}
                    name={props.name}
                />
            </label>
        )
    } else if (props.type === "checkbox") {
  return (
    <div className="flex flex-col w-full mt-4 text-xl text-white font-quicksand">
      <label>
        <input
          type="checkbox"
          checked={props.checked}
          onChange={(e) => props.onChangeHandler(e)}
          className="w-6 h-6 p-4 mr-6 rounded-lg bg-kyellow hover:bg-kmag checked:bg-kmag shadow-kcyan2"
        />
        {props.visibleLabel && props.label}
      </label>
    </div>
  )
}
else if (props.type === "radio") {
    return (
      <div className="flex flex-col w-full mt-4 text-xl text-white font-quicksand">
        <label className="mr-4">
          <input
            type="radio"
            value="Yes"
            checked={props.value === "Yes"}
            onChange={(e) => props.onChangeHandler(e.target.value)}
            className="mr-2"
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="No"
            checked={props.value === "No"}
            onChange={(e) => props.onChangeHandler(e.target.value)}
            className="mr-2"
          />
          No
        </label>
      </div>
    )
  } else {
        return (
            <div className="">
                <label className="flex flex-col w-full mt-4 text-xl text-white font-quicksand">
                    {props.visibleLabel && props.label}
                    <input
                        className="w-full px-6 py-4 mt-4 text-2xl rounded-full md:w-full md:py-6 text-kblack placeholder:text-2xl placeholder:text-kblack/60"
                        type={props.type}
                        placeholder={props.placeholder}
                        value={props.value}
                        required={props.isRequired}
                        name={props.name}
                        onChange={(e) => props.onChangeHandler(e.target.value)}
                    /></label>
            </div>
        )
    }

}

export default InputField