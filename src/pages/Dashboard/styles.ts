import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #666;

  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    border: 2px solid #FFF;
    border-right: 0;

    ${(props) =>
      props.hasError && css`
        border-color: #ce3030;
      `}}

    &&::placeholder {
      color: #a8a8b3;
    }

    transition: background ease 0.6s;
    &:focus {
      background: #a8a8b3;
      border: none;
      color: #0e0e0e;
      ::placeholder {
        color: #f1f1f1;

      }
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.4, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #ce3030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #eee;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 16px;
    }

    transition: all linear 0.2s;
    &:hover {
      background: #ddd;
      transform: scale(1.01);

      svg {
        background: #eee;
      }
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #a8a8B3;
      }
    }

    svg {
      margin-left: auto;
      border-radius: 50%;
    }
  }
`;
