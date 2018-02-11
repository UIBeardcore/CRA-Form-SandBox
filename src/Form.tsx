import * as React from "react";

import IFormData from "./interfaces/IFormData";

interface IFormProps {
    saveData: (data: IFormData) => void;
}

class Form extends React.Component<IFormProps> {
    render() {
        const { saveData } = this.props;

        let nameInput: HTMLInputElement | null;
        let emailInput: HTMLInputElement | null;
        let messageInput: HTMLTextAreaElement | null;

        function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
            event.preventDefault();
            saveData({
                name: nameInput && nameInput.value,
                email: emailInput && emailInput.value,
                message: messageInput && messageInput.value,
            } as IFormData);
        }

        return (
            <form onSubmit={onFormSubmit}>
                <div className="form-group">
                    <label>Name address</label>
                    <input
                        ref={input => (nameInput = input)}
                        type="text"
                        className="form-control"
                        id="nameInput"
                        placeholder="Enter Text"
                    />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        ref={input => (emailInput = input)}
                        type="text"
                        className="form-control"
                        id="input-email"
                        placeholder="Email Text"
                    />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea ref={input => (messageInput = input)} className="form-control" id="textarea" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
