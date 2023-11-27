import React, { useContext, useState, ChangeEvent, FormEvent } from "react";
import { createSignup } from "@/services/firebase-service";

const SignupDrawer: React.FC = () => {
  // All of the state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [postnummer, setPostnummer] = useState("");
  const [telefon, setTelefon] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");

  // All of my own functions
  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleTelefonChange(event: ChangeEvent<HTMLInputElement>) {
    setTelefon(event.target.value);
  }

  function handlePostnummerChange(event: ChangeEvent<HTMLInputElement>) {
    setPostnummer(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(event.target.value);
  }

  function handleGenderChange(event: ChangeEvent<HTMLSelectElement>) {
    setGender(event.target.value);
  }

  function handleBirthdateChange(event: ChangeEvent<HTMLInputElement>) {
    setBirthdate(event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("handle submit");
    const data = {
      name,
      email,
      postnummer,
      telefon,
      password,
      confirmPassword,
      gender,
      birthdate,
    };

    console.log(data);

    createSignup(data);

    /* const response = await createSignup(data); */

    /* if (response.ok) {
      console.log("everything went ok.");
      console.log(response);
      const body = await response.json();
      console.log(body);
      /* handleCancel();
    } */
  }

  return (
    <>
      <div className="signupDrawerContainer pb-40">
        <form id="signupForm" className="mt-20" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Fulde navn" value={name} onChange={handleNameChange} />
          <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          <input type="text" name="postnummer" placeholder="Postnummer" value={postnummer} onChange={handlePostnummerChange} />
          <input type="tel" name="telefon" placeholder="Telefon" value={telefon} onChange={handleTelefonChange} />
          <input type="password" name="password" placeholder="Adgangskode" value={password} onChange={handlePasswordChange} />
          <input type="password" name="confirmPassword" placeholder="Bekræft adgangskode" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          <label className="labelSignup">Køn</label>
          <select id="gender" name="gender" value={gender} onChange={handleGenderChange}>
            <option value="other">Ikke specificeret</option>
            <option value="male">Mand</option>
            <option value="female">Kvinde</option>
          </select>
          <div className="input input-single overflow-y-visible">
            <label className="input-label input-label--translated">Fødselsdato</label>
            <input id="birthdate" type="date" className="peer w-full border-none p-0 !shadow-none outline-none focus:!border-none focus:!outline-none focus:!ring-0 overflow-initial h-full" value={birthdate} onChange={handleBirthdateChange} />
          </div>

          <button type="submit" className="signupButton">
            Tilmeld
          </button>

          {/* <input type="submit" value={"Create"} /> */}
        </form>
      </div>
    </>
  );
};

export default SignupDrawer;
