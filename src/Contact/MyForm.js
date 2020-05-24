import React from "react";
import { FormPanel } from './Form.css';
import Button from '../pageElements/Button'
export default class MyForm extends React.Component {
   constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
         status: ""
      };
   }

   render() {
      const { status } = this.state;
      return (
         <FormPanel>
            <form
               onSubmit={this.submitForm}
               action="https://formspree.io/xknqjgwv"
               method="POST">
               <input placeholder='Enter your email' type="email" name="email" />
               <textarea placeholder='Message' name="message" />
               {status === "SUCCESS" ? <p>Thanks!</p> : <Button content={'Send'} />}
               {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
         </FormPanel>

      );
   }

   submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
         if (xhr.readyState !== XMLHttpRequest.DONE) return;
         if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
         } else {
            this.setState({ status: "ERROR" });
         }
      };
      xhr.send(data);
   }
}