import React, {useState, useEffect} from 'react'
import { LargeImageContainer } from '../userinterface/LargeImageContainer'

import { KStoreTitle } from '../userinterface/KStoreTitle';
import InputField from '../userinterface/InputField';
import MailchimpSubscribe from 'react-mailchimp-subscribe'
// require("dotenv").config();
const userId = '7367edb94826638a5c585c285'
const formId = '80be11e627'


const event = {
  name: 'Simcoe Stitchcraft Newsletter'
}

const footerContactInfo = {
  company: 'Simcoe Stitchcraft',
  address1: 'PO Box 99900',
  city: 'Barrie',
  province: 'ON',
  postal: 'L4N 3A2',
country: 'Canada'
}

const campaignDefaults = {
  from_name: "Kendall @ SimcoeStitchcraft",
  from_email: "kendall@simcoestitchcraft.com",
  subject: "SimcoeStitchcraft Newsletter",
  language: "EN_US",
}

const postUrl = `https://icloud.us13.list-manage.com/subscribe/post?u=${userId}&id=${formId}`



const JoinMailingList = (props) => {

const sectionTitle = "join the mailing list"

const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isSubscribedToNewsletter, setIsSubscribedToNewsletter] = useState("Yes")

// const formAction = "https://icloud.us13.list-manage.com/subscribe/post?u=7367edb94826638a5c585c285&amp;id=80be11e627&amp;f_id=005691e2f0"

// async function run() {
// const response = await mailchimp.ping.get();
// console.log('Response from mailchimp: ' + response)
// }
// run();

// fetch('/api/ping', {
// method: 'GET',
// headers: {
// Authorization: 'apikey 9bcace914c887eb5386a39620d1f3230-us13'
// },
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .then(err => console.error(err))


  // const mailchimpUrl = "https://us13.api.mailchimp.com/3.0/lists/80be11e627/members"


  // const handleSubmit = async (event) => {

  //     event.preventDefault();

  // if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
  //     alert('Please enter a valid email address.');
  //     return;
  //   }

  //   try {
  //     const res = await fetch('/api/mailchimp', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         url: mailchimpUrl,
  //         data: {
  //           email_address: email,
  //           status: 'subscribed'
  //         }
  //       })
  //     })
  //     const data = await res.json()
  //     console.log(data)
  //   } catch (err) {
  //     console.error(err)
  //   }


  // }


  return (

    <section className="container w-full py-12 mx-auto md:py-24 max-w-7xl">
      <h2 className="mx-auto text-center ">
        <KStoreTitle title={sectionTitle} textType={"sectionheader"} />
      </h2>
      <div className="pt-12">
        <LargeImageContainer contents={<img
          src={"/assets/image_mountains.jpg"}
          className="object-cover object-center w-full bg-no-repeat rounded-3xl"
          alt="A purple mountain quilt sitting over a bench outside."
        />} layoutPrefs={"shadow-kcyan4"} />
      </div>

      <div className="flex flex-col items-center w-full px-6 mx-auto text-white font-quicksand lg:w-10/12 lg:pt-12">
        <h3 className="w-full mb-6 text-4xl text-center ">Let's stay in touch!</h3>
        <p className="mt-6 text-2xl text-center md:w-8/12">
          Leave your email address and I'll let you know when I've finished new
          projects.
        </p>
        <MailchimpSubscribe
          url={postUrl}
          render={({ subscribe, status, message }) => (
            <NewsletterForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
              subscriptionStatus={isSubscribedToNewsletter}
            />
          )}
        />
        </div>
    </section>

  )
}

export default JoinMailingList

const NewsletterForm = ({ status, message, onValidated, subscriptionStatus }) => {
  console.log('message: ', message);
  console.log('status: ', status);
  const [email, setEmail] = useState('');
  const [userName, setUsername] = useState('');
  const [userMessage, setUserMessage] = useState(`Newsletter subscription on ${new Date().toLocaleString('en-US', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZoneName: 'short'}).replace(/[^\w\d,'.-]/g, ' ')}`);

  const [isSubscribedToNewsletter, setIsSubscribedToNewsletter] = useState(subscriptionStatus)

  const handleSubmit = (e) => {
    e.preventDefault();
    email && userName && email.indexOf("@") > -1 && onValidated({
      MERGE0: email, //or maybe EMAIL?
      MERGE1: userName,
      MERGE2: userMessage,
      MERGE3: isSubscribedToNewsletter === "No" ? "No" : "Yes",

    })
    console.log('userName: ', userName);
    console.log('email: ', email);
    console.log('isSubscribedToNewsletter: ', isSubscribedToNewsletter);
    console.log('userMessage: ', userMessage);
  }

  useEffect(() => {
    if(status === 'success') {
      clearFields();
    }
  }, [status])

  useEffect(() => {
    console.log('isSubscribedToNewsletter: ', isSubscribedToNewsletter);
  }, [isSubscribedToNewsletter])

  const clearFields = () => {
    setUsername('')
    setEmail('')
  }

  const radioHandler = (val) => {
    setIsSubscribedToNewsletter(val)

  }

  return (<form
    className="flex flex-col items-center w-full mx-auto form-vertical"
    onSubmit={(e) => handleSubmit(e)}
  >
    {
      <h3 className={` text-2xl font-bold text-kyellow ${status === "success" ? 'inline mt-32 mb-32' : 'hidden'}`}>
        {status === "success" ? "Thanks for subscribing!" : ""}
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
          isRequired

          />
          <div className="hidden">
            <InputField
              type="radio"

              checked={isSubscribedToNewsletter}
              onChangeHandler={radioHandler}
              />
          </div>

        </div>
      ) : null
    }
    {
      status === "error" && (
        <h3 className="w-6/12 my-8 text-xl font-bold text-red-400"
        dangerouslySetInnerHTML={{__html: message}}></h3>
      )
    }
    {/* Close button appears if form was successfully sent */}

    {
      status === "success" ? null :
      <InputField
      label="Join the Newsletter"
      type="submit"
      formValues={[email, userName, userMessage, isSubscribedToNewsletter]} />
    }


  </form>);
}
