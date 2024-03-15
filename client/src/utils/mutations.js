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
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, petName: $petName, phoneNumber: $phoneNumber) {
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

export const ADD_TRAINING = gql`
  mutation addTraining($date: Date!, $time: String!, $comments: String) {
    addTraining(date: $date, time: $time, comments: $comments) {
      _id
      date
      time
      comments
    }
  }
`;

export const ADD_SITTING = gql`
  mutation addSitting($phoneNumber: String!, petName: String!, $appointmentStartDate: String!, $appointmentEndDate: String!, $startTime: String!, $endTime: String!, $comments: String) {
    addSitting(phoneNumber: $phoneNumber, petName: $petName, appointmentStartDate: $appointmentStartDate, appointmentEndDate: $appointmentEndDate, startTime: $startTime, endTime: $endTime, comments: $comments) {
      _id
      phoneNumber
      petName
      appointmentStartDate
      appointmentEndDate
      startTime
      endTime
      comments
    }
  }
`;

