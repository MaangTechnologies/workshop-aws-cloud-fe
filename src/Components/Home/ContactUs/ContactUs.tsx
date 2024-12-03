import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { authSelectors } from "../../../Store/Auth";
import { dispatchStore } from "../../../Utilities/common";
import { contactUsAPICall } from "../../../Services/ContactUs";

interface IFormInput {
  fullname: string;
  email: string;
  contactNumber: string;
  description: string;
  subject: string;
}

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: "onChange" });

  const FetchContactUs = useSelector(authSelectors.getContactUsState);
  const loadingState = FetchContactUs?.loader;
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { fullname, email, contactNumber, description, subject } = data;
    const formData = {
      name: fullname,
      email: email,
      phone: contactNumber,
      subject: subject,
      message: description,
      app_name: "Sample Project",
    };

    dispatchStore(contactUsAPICall(formData));
  };

  return (
    <section id="contact-us" className="contact-us">
      <br />
      <h1 className="contact-us-title">Contact Us</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name"
          {...register("fullname", {
            required: "Full Name is required",
            minLength: {
              value: 3,
              message: "Full Name must be at least 3 characters",
            },
          })}
        />
        {errors.fullname && (
          <p className="validation-error w-100 color-white">
            {errors.fullname.message}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="validation-error w-100 color-white">
            {errors.email.message}
          </p>
        )}

        <input
          type="text"
          placeholder="Contact Number"
          {...register("contactNumber", {
            required: "Contact Number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Contact Number must be exactly 10 digits",
            },
          })}
        />
        {errors.contactNumber && (
          <p className="validation-error w-100 color-white">
            {errors.contactNumber.message}
          </p>
        )}

        <input
          type="text"
          placeholder="Subject"
          {...register("subject", {
            required: "Subject is required",
            minLength: {
              value: 3,
              message: "Subject must be at least 3 characters",
            },
          })}
        />
        {errors.subject && (
          <p className="validation-error w-100 color-white">
            {errors.subject.message}
          </p>
        )}

        <textarea
          placeholder="Message"
          {...register("description", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
        />
        {errors.description && (
          <p className="validation-error w-100 color-white">
            {errors.description.message}
          </p>
        )}

        <button type="submit" disabled={loadingState}>
          {loadingState ? "Sending.." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
