import React from "react";
import { Box, Typography } from "@mui/material";
import { Repository } from "src/types/graphql";

export type RepoBoxProps = {
  repo?: Repository;
};

export const RepoBox = (props: RepoBoxProps) => {
  const { repo } = props;
  console.log(repo);

  return (
    <Box
      width="450px"
      padding={2}
      mb={1}
      border="1px solid gray"
      borderRadius={2}
    >
      <Typography variant="subtitle1">{repo?.name}</Typography>
      <Typography variant="body1">{repo?.description}</Typography>
      <Box display="flex" alignItems="center">
        {/* Primary Language Information of Repository */}
        <Box
          width="15px"
          height="15px"
          bgcolor={repo?.primaryLanguage?.color || undefined}
          borderRadius="100%"
          mr={1}
        ></Box>
        <Box mr={1}>
          <Typography variant="body2">{repo?.primaryLanguage?.name}</Typography>
        </Box>

        {/* Last Updated at */}
        <Typography variant="body2">
          Updated on {new Date(repo?.updatedAt).toDateString()}
        </Typography>
      </Box>
    </Box>
  );
};
