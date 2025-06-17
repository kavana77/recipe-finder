import { contactForm } from "@/utils/http";
import { useRef, useState, type FormEvent } from "react";

const useContact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(form.current!);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    try {
      await contactForm(name, email, subject, message);
      setSuccess(true);
      setError(false);
    } catch (err) {
      console.error("Error sending contact form", err);
      setError(true);
      setSuccess(false);
    }
  };
  return {
    form,
    sendEmail,
    success,
    error,
  };
};
export default useContact;
