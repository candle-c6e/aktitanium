import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { useForm } from "react-hook-form"

import SEO from "../components/Seo"

const ContactStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  .contact-right {
    label {
      margin-bottom: 1rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 0.5rem;
    }

    input,
    textarea {
      border: 1px solid #ced4da;
      padding: 0.375rem 0.75rem;
      border-radius: 5px;
    }
  }

  button {
    padding: 1rem 1.5rem;
    background: none;
    border: none;
    color: #fff;
    border: 1px solid #ffdf00;
    border-radius: 5px;
    cursor: pointer;

    &[disabled] {
      background: gray;
    }
  }

  .error {
    color: red;
    margin-top: 10px;
  }

  @media (max-width: 1100px) {
    .contact-left {
      display: none;
    }

    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

export default function Contact({ data }) {
  const [submit, setSubmit] = useState(false)
  const [emailResponse, setEmailResponse] = useState(null)

  const { handleSubmit, register, errors, reset } = useForm()
  const onSubmit = async values => {
    setSubmit(true)
    const response = await fetch(
      "https://send-email.thainvehement.vercel.app/api",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    )
    const result = await response.json()
    if (result.error) {
      setEmailResponse("Please try again later")
    } else {
      setEmailResponse("Thank you for your contact")
    }
    reset(result)
    setSubmit(false)
  }

  return (
    <ContactStyles>
      <SEO title="Aktitanium | Contact" />
      <div className="contact-left">
        <Img
          fluid={data.file.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
        />
      </div>
      <div className="contact-right">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              placeholder="name"
              ref={register({
                required: "Required",
              })}
            />
            <p className="error">{errors.name && errors.name.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="telephone">Telephone</label>
            <input
              name="telephone"
              placeholder="telephone"
              type="number"
              ref={register({
                required: "Required",
              })}
            />
            <p className="error">
              {errors.telephone && errors.telephone.message}
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              placeholder="email"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            <p className="error">{errors.email && errors.email.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              rows={5}
              placeholder="description"
              name="description"
              id="description"
              ref={register({
                required: "Required",
              })}
            />
            <p className="error">
              {errors.description && errors.description.message}
            </p>
          </div>
          {emailResponse ? (
            <p className="error" style={{ marginBottom: "1rem" }}>
              {emailResponse}
            </p>
          ) : null}
          <button type="submit" disabled={submit}>
            Submit
          </button>
        </form>
      </div>
    </ContactStyles>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "port_8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
