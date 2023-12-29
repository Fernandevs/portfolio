import { useEffect, useState } from 'react';
import { Message } from './Message.jsx';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: ''
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    console.log('useEffect called');
  }, []);

  useEffect(() => {
    console.log('formState changed');
  }, [formState]);

  useEffect(() => {
    console.log('email changed');
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr/>

      <input
        type="text"
        className="form-control"
        name="username"
        placeholder="username"
        onChange={ onInputChange }
        value={ username }/>
      <input
        type="email"
        className="form-control mt-2"
        name="email"
        placeholder="email@example.com"
        onChange={ onInputChange }
        value={ email }/>

      { username === 'strider' && <Message/> }
    </>
  );
};
