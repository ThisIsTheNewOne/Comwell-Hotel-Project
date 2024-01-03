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
  const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
    console.log("handle submit")
     
    setShowErrors(true);
  
    // Define error messages for each validation
    const errorMessages: { [key: string]: string } = {
      name: "This field is required.",
      email: "Please enter a valid email address.",
      postnummer: "Please enter a numerical value.",
      telefon: "Please enter a numerical value.",
      password: "Password must be at least 8 characters and contain at least one number.",
      confirmPassword: "Passwords do not match.",
      gender: "This field is required.",
      birthdate: "You must be at least 18 years old to register.",
    };
    
  
    // Check if all required fields are filled
    const errors: { [key: string]: string } = {};

    // Validate 'name' field
if (!name) {
  errors.name = errorMessages.name; // This checks if the 'name' field is empty and assigns an error message
}

    // Validate 'email' field
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!email || !emailRegex.test(email)) {
  errors.email = errorMessages.email; // This checks if the 'email' format is invalid or the field is empty and assigns an error message
}


// Validate 'postnummer' field
const numericRegex = /^\d+$/;
if (!postnummer && !numericRegex.test(postnummer)) {
  errors.postnummer = errorMessages.postnummer; // This checks if the 'postnummer' format is invalid and assigns an error message
}

// Validate 'telefon' field
if (!telefon && !numericRegex.test(telefon)) {
  errors.telefon = errorMessages.telefon; // This checks if the 'telefon' format is invalid and assigns an error message
}

// Validate 'password' field
const passwordRegex = /^(?=.*\d).{8,}$/;
if (!password || !passwordRegex.test(password)) {
  errors.password = errorMessages.password; // This checks if the 'password' format is invalid or the field is empty and assigns an error message
}

// Confirm 'confirmPassword' matches 'password'
if (!confirmPassword || password !== confirmPassword) {
  errors.confirmPassword = errorMessages.confirmPassword; // This checks if the 'confirmPassword' is empty or does not match 'password' and assigns an error message
}

// Validate 'gender' field
if (!gender) {
  errors.gender = errorMessages.gender; // This checks if the 'gender' field is empty and assigns an error message
}

// Validate 'birthdate' field
if (!birthdate) {
  errors.birthdate = errorMessages.birthdate; // This checks if the 'birthdate' field is empty and assigns an error message
} else {
  const today = new Date();
  const userBirthdate = new Date(birthdate);
  let userAge = today.getFullYear() - userBirthdate.getFullYear();
  const monthDiff = today.getMonth() - userBirthdate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < userBirthdate.getDate())) {
    userAge--;
  }
  if (userAge < 18) {
    errors.birthdate = errorMessages.birthdate; // This checks if the user is less than 18 years old based on the 'birthdate' and assigns an error message
  }
}


    
console.log("This works 4")
  
    // If any errors are found, update the state and prevent form submission
  if (Object.keys(errors).length > 0) {
    setErrors(errors);
    return;
  }

    
    
    console.log("This works 5")

    // If all validations pass, proceed with signup
    createSignup(
      name,
      email,
      postnummer,
      telefon,
      password,
      confirmPassword,
      gender,
      birthdate
    );
  }

  return (
    <>
      <div className="signupDrawerContainer pb-40">
        <form id="signupForm" className="mt-20" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Fulde navn" value={name} onChange={handleNameChange} />
          {showErrors && errors.name && <span className="errorMessage text-red-500 text-xs mb-3">{errors.name}</span>}
          <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          {showErrors && errors.email && <span className="errorMessage text-red-500 text-xs mb-3">{errors.email}</span>}
          <input type="text" name="postnummer" placeholder="Postnummer" value={postnummer} onChange={handlePostnummerChange} />
          {showErrors && errors.postnummer && <span className="errorMessage text-red-500 text-xs mb-3">{errors.postnummer}</span>}
          <input type="tel" name="telefon" placeholder="Telefon" value={telefon} onChange={handleTelefonChange} />
          {showErrors && errors.telefon && <span className="errorMessage text-red-500 text-xs mb-3">{errors.telefon}</span>}
          <input type="password" name="password" placeholder="Adgangskode" value={password} onChange={handlePasswordChange} />
          {showErrors && errors.password && <span className="errorMessage text-red-500 text-xs mb-3">{errors.password}</span>}
          <input type="password" name="confirmPassword" placeholder="Bekræft adgangskode" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          {showErrors && errors.confirmPassword && <span className="errorMessage text-red-500 text-xs mb-3">{errors.confirmPassword}</span>}
          <label className="labelSignup">Køn</label>
          <select id="gender" name="gender" value={gender} onChange={handleGenderChange} >
            <option value="other">Ikke specificeret</option>
            <option value="male">Mand</option>
            <option value="female">Kvinde</option>
          </select>
          {showErrors && errors.gender && <span className="errorMessage text-red-500 text-xs mb-3">{errors.gender}</span>}
          <div className="input input-single overflow-y-visible">
            <label className="input-label input-label--translated">Fødselsdato</label>
            <input id="birthdate" type="date" className="peer w-full border-none p-0 !shadow-none outline-none focus:!border-none focus:!outline-none focus:!ring-0 overflow-initial h-full" value={birthdate} onChange={handleBirthdateChange}/>
          </div>
          {showErrors && errors.birthdate && <span className="errorMessage text-red-500 text-xs mb-3">{errors.birthdate}</span>}

          <button type="submit" className="signupButton">
            Tilmeld
          </button>

        </form>
      </div>
    </>
  );
};

export default SignupDrawer;
