module.exports = {
  overwrite: true,
  schema: [
    {
      "https://api.github.com/graphql": {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_GITHUB_TOKEN,
        },
      },
    },
  ],
  documents: "src/**/*.graphql",
  generates: {
    "src/types/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
      },
    },

    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
