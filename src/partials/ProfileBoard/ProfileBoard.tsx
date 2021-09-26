import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { GithubProfileQuery } from "src/types/graphql";
import { RepoBox } from "src/components";

export type ProfileBoardProps = {
  profile: GithubProfileQuery;
};

/**
 * A partial page component that renders profile and repositories information
 * @param props ProfileBoardProps
 * @returns
 */
export const ProfileBoard = (props: ProfileBoardProps) => {
  const {
    profile: { user },
  } = props;

  if (!user) return <></>;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {/* Profile Information */}
      <Box
        display="flex"
        width="450px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Avatar
          src={user.avatarUrl}
          alt={user.name || ""}
          sx={{ width: 200, height: 200, marginBottom: 2 }}
        />
        <Box>
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="h5">{user.login}</Typography>
          <Typography variant="subtitle1">{user.bio}</Typography>
        </Box>
      </Box>

      {/* Repositories Information */}
      <Box mt={3}>
        {user.repositories.nodes?.map((repo: any, index: number) => (
          <RepoBox repo={repo} key={index} />
        ))}
      </Box>
    </Box>
  );
};
