import { useState, useEffect, useContext } from 'react';
import Alert from '@mui/material/Alert';
import { Form, Field } from 'react-final-form'
import emailjs from '@emailjs/browser';
import _ from 'lodash';
import { appActions, AppContext } from '../../../context/app';
import Button from '../../common/button/Button';
import InputField from './inputField/InputField';

import './ContactForm.css';

interface FormValues {
  name: string,
  email: string,
  subject: string,
  message: string,
}

const ContactForm = () => {
  const { dispatch } = useContext(AppContext);

  const [informMessage, setInformMessage] = useState<string | null>(null);

  useEffect(() => {
    if (informMessage) {
      setTimeout(() => {
        setInformMessage(null);
      }, 5000);
    }
  }, [informMessage]);

  const handleClick = () => {
    dispatch(appActions.addMessage({
      type: 'error',
      message: 'Information!',
    }));
  }
  const remove = () => {
    dispatch(appActions.removeAllMessages());
  }

  const validator = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.name) {
      errors.name = 'Required'
    }
    if (!values.email) {
      errors.email = 'Required'
    }
    if (!values.message) {
      errors.message = 'Required'
    }
    return errors;
  };

  const sendEmail = (values: FormValues) => {
    console.log('Values: ', values);
    const dataToSend = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    };

    emailjs.send('service_bifqn4i', 'template_b6eeboc', dataToSend, 'o4lBUlw2FhJLrkHJ4')
      .then(function(response) {
        setInformMessage('Email was successfully sent!');
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        setInformMessage('Oops, something went wrong, try again later');
        console.log('FAILED...', error);
      });
  };

  return (
    <div className="ContactForm">
      <Form
        onSubmit={sendEmail}
        initialValues={{
          name: '',
          email: '',
          subject: '',
          message: '',
        }}
        validate={validator}
        render={({
          handleSubmit,
          submitFailed,
          submitSucceeded,
          form,
          errors,
          values,
        }) => {

          return (
            <form onSubmit={handleSubmit}>
              <div className="FirstRow">
                <Field
                  name="name"
                  render={({ input, meta }) => {
                    return (
                      <InputField
                        name="name"
                        value={input.value}
                        onChange={input.onChange}
                        placeholder="Name"
                        additionalClassName="Name"
                        required
                      />
                    )}}
                />
                <Field
                  name="email"
                  render={({ input, meta }) => (
                    <InputField
                      name="email"
                      value={input.value}
                      onChange={input.onChange}
                      placeholder="Email"
                      additionalClassName="Email"
                      required
                    />
                  )}
                />
              </div>

              <div className="SecondRow">
                <div className="Subject">
                  <Field
                    name="subject"
                    render={({ input, meta }) => (
                      <InputField
                        name="subject"
                        value={input.value}
                        onChange={input.onChange}
                        placeholder="Subject"
                        additionalClassName="Subject"
                      />
                    )}
                  />
                </div>
              </div>

              <div className="ThirdRow">
                <div className="Message">
                  <Field
                    name="message"
                    render={({ input, meta }) => (
                      <InputField
                        name="message"
                        value={input.value}
                        onChange={input.onChange}
                        placeholder="Message"
                        additionalClassName="Message"
                        textArea
                        required
                      />
                    )}
                  />
                </div>
              </div>

              <div className="FourthRow">
                <Button
                  text="Send message!"
                  type="submit"
                  additionalClassName="ContactFormButton"
                  onClick={() => form.reset()}
                  disabled={!_.isEmpty(errors)}
                />
                <span className={`Tooltip ${!_.isEmpty(errors) ? 'shown' : ''}`}>Fill in all required fields</span>
                <Button
                  text="ADD"
                  additionalClassName="ContactFormButton"
                  onClick={handleClick}
                  disabled={false}
                />
                <Button
                  text="REMOVE"
                  additionalClassName="ContactFormButton"
                  onClick={remove}
                  disabled={false}
                />
              </div>
            </form>
          );
        }}
      />
    </div>
  );
};

export default ContactForm;
