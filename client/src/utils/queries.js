import { gql } from '@apollo/client';

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