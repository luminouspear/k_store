import React, {useState} from 'react'
import { KStoreTitle } from '../userinterface/KStoreTitle';
import ContactMeForm from './ContactMeForm';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
const userId = process.env.REACT_APP_MAILCHIMP_U
const formId = process.env.REACT_APP_MAILCHIMP_ID

const ContactMe = (props) => {

  const sectionTitle = "contact me"
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [userName, setUserName] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [isSubscribedToNewsletter, setIsSubscribedToNewsletter] = useState("No")



  const postUrl = `https://icloud.us13.list-manage.com/subscribe/post?u=${userId}&id=${formId}`



  return (
    <section className="container w-full mx-auto my-4 bg-transparent max-w-7xl">
      <h2 className="mx-auto mb-6 text-center">
        <KStoreTitle title={sectionTitle} textType={"sectionheader"} allowLineBreak={true} />
      </h2>

      <div className="flex flex-col items-center w-full px-6 mx-auto text-white font-quicksand lg:w-10/12 lg:pt-12 ">
        <h3 className="w-full mb-6 text-3xl text-center lg:w-10/12 md:text-4xl ">
          Still have questions? Want to get something made? Let's talk!
        </h3>

        <MailchimpSubscribe
          url={postUrl}
          render={({ subscribe, status, message }) => (
            <ContactMeForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
              subscriptionStatus={isSubscribedToNewsletter}
            />
          )}
        />


        <form className="flex flex-col items-center w-full form-vertical">



        </form>
      </div>
    </section>

  )
}

export default ContactMe
