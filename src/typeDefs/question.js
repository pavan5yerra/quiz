const schema = `type Question {
    question: String!
    answer: String!
    category : String!
  }`;
  
  const Query = `type Query {
    questions: [Question]
  }`;
  
  
  const QuestionTypeDefs =`
   ${schema} 
   ${Query}
  `;
  
  module.exports = QuestionTypeDefs;