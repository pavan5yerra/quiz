const schema = `type User {
  first_name: String!
  last_name: String!
  email: String!
  password : String!
}`;

const Query = `type Query {
  users: [User]
  user(id: ID!): User
}`;


const UserTypeDefs =`
 ${schema} 
 ${Query}
`;

module.exports = UserTypeDefs;