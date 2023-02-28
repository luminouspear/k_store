import React, {useState, useEffect} from 'react';
import InputField from '../userinterface/InputField'

const ContactMeForm = ({ status, message, onValidated, subscriptionStatus }) => {


  const [email, setEmail] = useState('')
  const [userName, setUsername] = useState('')
  const [userMessage, setUserMessage] = useState('')
  const [isSubscribedToNewsletter, setIsSubscribedToNewsletter] = useState("No")

  const handleSubmit = (e) => {

    e.preventDefault();

    email && userName && email.indexOf("@") > -1 && userMessage !== '' &&
    onValidated({
      MERGE0: email,
      MERGE1: userName,
      MERGE2: userMessage,
      MERGE3: isSubscribedToNewsletter  === "No" ? "No" : "Yes"
    })

  }

  useEffect(() => {
    if(status === "success") {
      clearFields();
    }}, [status])

    useEffect(() => {}, [isSubscribedToNewsletter])

    const clearFields = () => {
      setUsername('')
      setEmail('')
      setUserMessage('')
      setIsSubscribedToNewsletter('No')
    }

    const checkHandler = (val) => {
      setIsSubscribedToNewsletter(val === true ? 'Yes' : 'No')
    }



  return (
  <form
  className="flex flex-col items-center w-full mx-auto form-vertical"
  onSubmit={(e) => handleSubmit(e)}
  >
    {
      <h3 className={`text-2xl font-bold text-kyellow ${status === "success" ? 'inline mt-32 mb-32' : 'hidden'}`}>
        {
        status === "success" ?
        "Thanks for getting in contact with me! I'll get back to you soon!"
      : ""
      }
      </h3>
    }
    {
      status === "sending" && (
        <h3 className="mt-4 text-2xl font-bold text-kyellow">Sending...</h3>
      )
    }
    {
      status !== "success" ? (
        <div className="flex flex-col w-full md:w-8/12">
          <InputField
              label="Your Name"
              onChangeHandler={setUsername}
          type="text"
          value={userName}
            placeholder="name"
            visibleLabel={false}
          isRequired
          />
          <InputField
          label="Email"
          onChangeHandler={setEmail}
          type="email"
          value={email}
          visibleLabel={false}
          placeholder="email address"
          />
          <InputField
          label="Message"
          onChangeHandler={setUserMessage}
          value={userMessage}
          visibleLabel={false}
          type="textarea"
          />

        </div>
      ) : null
      }
      {
        status === "error" && (
          <h3 className="w-6/12 my-8 text-xl font-bold text-red-400"
          dangerouslySetInnerHTML={{__html: message} }>
          </h3>
        )
      }
      {status === "success" ? null :
      <InputField
        label="Send"
        type="submit"
        formValues={[email, userName, userMessage, isSubscribedToNewsletter]}
        />}

  </form>);
};
export default ContactMeForm;
