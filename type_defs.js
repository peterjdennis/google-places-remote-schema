const gql = require('graphql-tag');

const typeDefs = gql`
    type Places {
        name: String
        lat: String
        long: String
        rating: Float
        address: String
    }

    type Query {
        places(lat: String!, long: String!): [Places]
    }
`;

module.exports = {
    typeDefs,
};