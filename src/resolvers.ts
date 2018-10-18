import { Card } from "./entity/Card";
import { IResolvers } from "graphql-tools";

export const resolvers: IResolvers = {
  Query: {
    hello: () => {
      return "hello";
    },
    allCards: (_, { offset }) => {
      return Card.find({ take: 20, skip: offset });
    }
  },
  Mutation: {
    createCard: async (
      _,
      {
        css,
        title,
        description,
        datetime,
        type,
        width,
        height,
        size,
        views,
        link,
        vote,
        favorite,
        comment_count,
        account_url,
        account_id,
        ups,
        downs,
        points,
        score,
        is_album,
        in_most_viral
      }
    ) => {
      await Card.create({
        css,
        title,
        description,
        datetime,
        type,
        width,
        height,
        size,
        views,
        link,
        vote,
        favorite,
        comment_count,
        account_url,
        account_id,
        ups,
        downs,
        points,
        score,
        is_album,
        in_most_viral
      }).save();

      return true;
    }
  }
};
