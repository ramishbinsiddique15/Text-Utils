import React from "react";
export default function About(props) {
  document.title = "TextUtils | About";
  return (
    <div className="container">
      <h1
        className="my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "black",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              Who are we?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor:
                  props.mode === "light" ? "white" : "rgb(62, 67, 71)",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <strong>We are a team of passionate developers.</strong> We are
              dedicated to create the best user experiences.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "black",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              How it works?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor:
                  props.mode === "light" ? "white" : "rgb(62, 67, 71)",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              Our platform uses advanced algorithms to provide you with the best
              possible results.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "black",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              Contact Us
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor:
                  props.mode === "light" ? "white" : "rgb(62, 67, 71)",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <strong> You can reach us at contact@ourwebsite.com</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
