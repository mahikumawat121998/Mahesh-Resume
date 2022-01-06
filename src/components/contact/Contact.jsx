import { useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
// import SendIcon from '@mui/icons-material/Send';
import { Person, Mail, Send } from "@material-ui/icons";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_b03fgmo",
        "template_yjdxr1s",
        e.target,
        "user_UUQwsZUcY1G9j4udFCE03"
      )
      .then((res) => {
        console.log("Success");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            label="Name"
            type="text"
            placeholder="Name"
            variant="standard"
            name="name"
          />
          <TextField
            id="standard-basic"
            label="Email"
            type="text"
            placeholder="Email"
            variant="standard"
            name="user_email"
          />

          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit" value="send">
            SEND
          </button>          
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
