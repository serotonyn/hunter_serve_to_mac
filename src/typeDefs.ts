import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Card {
    id: ID!
    css: String
    title: String
    description: String
    datetime: Int
    type: String
    width: Int
    height: Int
    size: Int
    views: Int
    link: String
    vote: String
    favorite: Boolean
    comment_count: Int
    account_url: String
    account_id: Int
    ups: Int
    downs: Int
    points: Int
    score: Int
    is_album: Boolean
    in_most_viral: Boolean
  }

  type Query {
    hello: String!
    allCards(offset: Int): [Card!]!
  }
  type Mutation {
    createCard(
      css: String
      title: String
      description: String
      datetime: Int
      type: String
      width: Int
      height: Int
      size: Int
      views: Int
      link: String
      vote: String
      favorite: Boolean
      comment_count: Int
      account_url: String
      account_id: Int
      ups: Int
      downs: Int
      points: Int
      score: Int
      is_album: Boolean
      in_most_viral: Boolean
    ): Boolean!
  }
`;
