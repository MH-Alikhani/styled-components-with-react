import {
  PageLayout,
  Input,
  PasswordInput,
  Button,
  Spinner,
} from "componets/common";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;

export default function Login() {
  const [formField, setFormField] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  let timeout;

  function handleInputChange(e) {
    e.persist();
    setFormField({ ...formField, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    <PageLayout>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              value={formField.username}
              onChange={handleInputChange}
              name='username'
              type='text'
              placeholder='Username'
            />
            <PasswordInput
              value={formField.password}
              onChange={handleInputChange}
              name='password'
            />
          </>
        )}

        <Button large type='submit' disabled={loading}>
          {loading ? "loading..." : " Login"}
        </Button>
        {!loading && (
          <>
            <div className='alt-text'>or</div>
            <Button secondary type='button'>
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
}
