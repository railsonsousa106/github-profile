import React, { useState } from "react";
import { useGithubProfileQuery } from "./types/graphql";

import { SearchBoard, ProfileBoard } from "./partials";
import { Box } from "@mui/material";

const App = () => {
  const [userName, setUserName] = useState<string | undefined>();

  /* A hook that gets Profile & Repositories Information
   *  It'll skip if the userName is empty which means the form is not
   *  submitted(empty or invalid).
   */
  const {
    data: githubProfile,
    loading,
    error,
  } = useGithubProfileQuery({
    variables: {
      owner: userName ?? "",
      number_of_repos: 5,
    },
    skip: !userName || userName.length === 0,
  });

  const handleSubmit = (search: string) => {
    setUserName(search);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      {!githubProfile ? (
        <SearchBoard loading={loading} error={error} onSubmit={handleSubmit} />
      ) : (
        <ProfileBoard profile={githubProfile} />
      )}
    </Box>
  );
};

export default App;
