import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap";
import '../App.css';


const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, event) => {
    console.log(data);
    event.target.reset();
  };

  return (
    <Container className="pt-4">
      <Row className="justify-content-center font-20">
        <Col
          style={{ paddingLeft: 0, paddingRight: 0 }}
          xs={10}
          s={10}
          md={7}
          lg={6}
        >
          <form className = "add-form-wrapper" onSubmit={handleSubmit(onSubmit)}>
            <h2 className = "mb-4">Please Sign In</h2>
            <p>If you have already an account you can sign in</p>
            <div className="form-group font-20">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                ref={register({ required: true })}
              />
              {errors.singleErrorInput && "Your input is required"}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                autoComplete="on"
                ref={register({ required: true, minLength: 6 })}
              />
              {errors.password && (
                <span className="error-text">Password is too short</span>
              )}
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" variant="success" className="submit-button btn button mt-4 green-button">
                Submit              
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
