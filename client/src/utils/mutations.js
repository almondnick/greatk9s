import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $petName: String, $phoneNumber: String, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, petName: $petName, phoneNumber: $phoneNumber password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
        petName
        phoneNumber
      }
    }
  }
`;