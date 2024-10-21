import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Register({ setTrigger, closePopup }) {
  const form = useRef();
  const [formStatus, setFormStatus] = useState("idle"); // 'idle', 'success', 'error'
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_t2a99e8", "template_rxz1tt6", form.current, {
        publicKey: "XmKF93KKRhNUdiAh2",
      })
      .then(
        () => {
          setFormStatus("success");
          form.current.reset();
          setDepartment("");
          setDoctor("");

          // Use a single method to close the popup
          setTimeout(() => {
            setFormStatus("idle");

            // Prefer closing using setTrigger if available
            if (setTrigger) {
              setTrigger(false);
            } else if (closePopup) {
              closePopup();
            }
          }, 2000); // Close popup after 2 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
          setFormStatus("error");
        }
      );
  };
  return (
    <>
      {formStatus === "success" && (
        <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center py-3 z-50">
          Thank you for submitting the form!
        </div>
      )}
      <form ref={form} onSubmit={sendEmail} className="pt-4">
        <h1 className="xl:text-2xl font-bold text-iceblue text-center pt-4 lg:text-2xl md:text-2xl text-xl figtree">
          Book an Appointment
        </h1>
        <div className="bg-white xl:p-8 lg:p-8 md:p-2 p-2">
          <input
            className="rounded-lg  xl:w-12/12 xl:py-3 lg:w-12/12 md:w-12/12 w-12/12 lg:py-2 border-3 py-2 sofia-pro"
            type="text"
            id="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            className="sofia-pro rounded-lg px-2 border-3 xl:w-12/12 xl:py-3 lg:w-12/12 md:w-12/12 w-12/12 lg:py-2 lg:mt-4 xl:mt-4 pl-2 py-2 mt-2"
            type="tel"
            id="phone"
            name="tel"
            placeholder="Phone Number"
            required
          />

          <input
            className="sofia-pro rounded-lg  xl:w-12/12 xl:py-3 lg:w-12/12 md:w-12/12 w-12/12 mt-2 lg:py-2 xl:mt-4 lg:mt-4 border-3 py-2"
            type="text"
            id="text"
            name="email"
            placeholder="Your Email"
            required
          />

          <select
            className="sofia-pro rounded-lg border-3 xl:w-12/12 xl:py-3 lg:w-12/12 md:w-12/12 w-12/12 lg:py-2 py-2 lg:mt-4 xl:mt-4  mt-2 text-grey-600"
            id="department"
            name="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option value="" disabled>
              Choose Department
            </option>
            <option value="gynecology">Fertility</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="cardiology">Dermatology</option>
            <option value="orthopedics">Postnatal Care</option>
            <option value="neurology">Laparoscopic Surgery</option>
            <option value="dermatology">Pysiotherapy</option>
            <option value="radiology">Neonatology</option>
            <option value="surgery">Gynecological Oncology</option>
            <option value="emergency">ANC Care</option>
            <option value="emergency">High Risk Pregnancy</option>
            <option value="emergency">Obstetrics</option>
            <option value="emergency">Fetal Medicine</option>
            <option value="emergency">Family planning</option>
            <option value="emergency">Well woman clinic</option>
            <option value="emergency">Vaccination</option>
            <option value="emergency">Adolescent Health</option>
            <option value="emergency">NICU</option>
            <option value="emergency">Cosmetology</option>
            <option value="emergency">General Surgery</option>
            <option value="emergency">Urology and Urogynaecology</option>
            <option value="gynecology">Fertility</option>
            {/* Add more options */}
          </select>

          <select
            className="sofia-pro rounded-lg xl:w-12/12 xl:py-3 lg:w-12/12 md:w-12/12 w-12/12 lg:py-2 py-2 lg:mt-4 xl:mt-6 border-3 mt-4 text-grey-600"
            id="doctor"
            name="doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Doctor
            </option>
            <option value="Dr.Ambuja Govindaraj">Dr.Ambuja Govindaraj</option>
            <option value="Dr Bhagyashri C Andani">Dr Bhagyashri C Andani</option>
            <option value="Dr Pushpa A">Dr Pushpa A</option>
            <option value="Dr Meghana Murthy">Dr Meghana Murthy</option>
            <option value="Dr Shruthi Madhavi G">Dr Shruthi Madhavi G</option>
            <option value="Dr.vijetha">Dr.Vijetha</option>
            <option value="Dr.Sreenivas">Dr.Sreenivas</option>
          </select>

          <input
            className="sofia-pro uppercase rounded-lg border-3  xl:w-12/12 xl:py-3 lg:w-12/12 md:w-12/12 w-12/12 lg:py-2 py-2 lg:mt-4 xl:mt-4  mt-2 px-3 text-grey-600"
            type="date"
            id="date"
            name="date"
            placeholder="Date"
            required
          />

          <div className="center-button">
            <button
              className="sofia-pro bg-gradient rounded-lg xl:px-10 xl:py-3 text-white xl:mt-6 lg:mt-4 px-6 py-2 mt-4"
              style={{ outline: "none" }}
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </form>
      {formStatus === "error" && (
        <div className="fixed top-0 left-0 w-full bg-red-500 text-white text-center py-2 z-50">
          There was an error submitting the form. Please try again.
        </div>
      )}
    </>
  );
}