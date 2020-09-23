import React from "react";
import { useForm  } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap";

const SignUpPage = () => {
  const { register, handleSubmit, errors, getValues } = useForm();

  const onSubmit = (data, event) => {
    console.log(data);
    event.target.reset();
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col style={{ paddingLeft: 0, paddingRight: 0 }} xs={10} s={10} md={7} lg={6}>
          <form className = "add-form-wrapper" onSubmit={handleSubmit(onSubmit)}>
            <h2 className = "mb-3" >Sign Up</h2>
            <p>If you are not one of us, please create a new account</p>
            <div className="form-group font-20">
              <label>Name</label>
              <input type="text"
               className="form-control" 
               placeholder="Name" 
               name = "userName"
               ref={register({ required: true, minLength: 2 })}/>
               {errors.userName && ( <span className="error-text">Invalid name</span>)}
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name = "email"
                ref={register({ required: true })}
              />
              {errors.email && ( <span className="error-text">Invalid email</span>)}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                autoComplete="on"
                name = "password"
                ref={register({ required: true, minLength: 6 })}
              />
               {errors.password && (
                <span className="error-text">Password is too short</span>
              )}
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                autoComplete="on"
                name = "confirmedPassword"
                ref={register({ required: true, minLength: 6,
                    validate: (value) => value === getValues('password') || "Passwords don't match"
                })}
              />
               {errors.confirmedPassword && (
                <span className="error-text">Password doesn't match</span>
              )}
              
            </div>            
            <div className="d-flex justify-content-center mt-4">
              <button
                type="submit"
                className="btn green-button button"                
              >
                Sign Up
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;