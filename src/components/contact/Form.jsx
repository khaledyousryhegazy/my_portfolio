import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Form() {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.user_name || !formData.user_email || !formData.message) {
      return;
    }

    emailjs.sendForm(
      "service_c1xhask",
      "template_7qrgfrf",
      form.current,
      "cliaskLW_SLd8df0y"
    );

    // Clear form inputs after sending
    setFormData({
      user_name: "",
      user_email: "",
      message: "",
    });
  };

  return (
    <div className="px-6 py-14">
      <form className="flex flex-col gap-5" ref={form} onSubmit={sendEmail}>
        <input
          className=" block w-full outline-none border border-grayColor py-2 px-4 bg-transparent text-blackColor placeholder:text-sm"
          type="text"
          name="user_name"
          placeholder="Your Name"
          value={formData.user_name}
          onChange={handleInputChange}
          required
        />
        <input
          className=" block w-full outline-none border border-grayColor py-2 px-4 bg-transparent text-blackColor placeholder:text-sm"
          type="email"
          placeholder="Email"
          name="user_email"
          value={formData.user_email}
          onChange={handleInputChange}
          required
        />
        <textarea
          className=" block w-full outline-none border border-grayColor py-2 px-4 bg-transparent text-blackColor resize-none placeholder:text-sm"
          name="message"
          placeholder="Message"
          rows="4"
          cols="50"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <input
          className="py-3 block w-fit px-6 capitalize bg-blackColor text-lightColor cursor-pointer hover:tracking-widest duration-300"
          type="submit"
          value="Send Message"
        />
        <a
          href="tel:+201280710181"
          className="py-3 flex items-center gap-3 w-fit px-6 capitalize bg-blackColor text-lightColor cursor-pointer hover:tracking-widest duration-300"
        >
          Phone <FontAwesomeIcon icon={faPhone} />
        </a>
      </form>
    </div>
  );
}

export default Form;
