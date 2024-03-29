import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me {
        me{
            _id
            firstName
            lastName
            email
            trainingApmts{
                _id
                petName
                date
                time
                comments
            }
            sittingApmts{
                _id
                petName
                appointmentStartDate
                appointmentEndDate
                startTime
                endTime
                comments
            }
        }
    }
`;

export const QUERY_TRAINING = gql`
    query getTraining {
        training {
            date
            time
            comments
        }
    }
`;

export const QUERY_APPOINTMENTS = gql`
    query getAppointments {
        appointment {
            description
            appointmentDate
            appointmentTime
        }
    }
`;

export const QUERY_SITTING = gql`
    query getSitting {
        sitting {
            appointmentStartDate
            appointmentEndDate
            startTime
            endTime
            comments
        }
    }
`;