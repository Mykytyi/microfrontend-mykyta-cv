import { Form, Field } from 'react-final-form'
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
  const validator = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.name) {
      errors.name = 'Required'
    }
    return errors;
  };

  return (
    <div className="ContactForm">
      <Form
        onSubmit={(values) => console.log('Values: ', values)}
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
          form,
          errors,
          values,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="FirstRow">
                <Field
                  name="name"
                  render={({ input, meta }) => (
                    <InputField
                      name="name"
                      value={input.value}
                      onChange={input.onChange}
                      placeholder="Name"
                      additionalClassName="Name"
                    />
                  )}
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
                  onClick={(values) => null}
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
