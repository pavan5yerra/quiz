const { gql } = require('apollo-server-express');
async function handleGetAllUsers (req, res,server) {
    const GET_USERS = gql`
    query {
      users {
        first_name
        last_name
      }
    }
  `;
    const data = await server.executeOperation({query : GET_USERS});
    return  res.json(data);
}


module.exports = {
    handleGetAllUsers
}