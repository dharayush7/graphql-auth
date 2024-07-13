const quires = {};
const mutation = {
  createUser: async (_: any, {}: {}) => {
    return "randomid";
  },
};

export const resolvers = { quires, mutation };
