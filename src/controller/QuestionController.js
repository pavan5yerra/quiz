const { gql } = require('apollo-server-express');
async function handleGetAllQuestions (req, res,server) {

    const GET_QUESTIONS = gql`
        query {
            questions {
            question
            }
        }
    `;
      const data = await server.executeOperation({query : GET_QUESTIONS});
      return  res.json(data?.data?.questions);
}


module.exports = {
    handleGetAllQuestions
}