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
      owner: userName ?? "", // username of github profile to find
      number_of_repos: 5, // Number of repos to show on profile page
    },
    skip: !userName || userName.length === 0, // skip calling this hook if userName is not set(first load/form invalid)
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
        // Show SearchBoard if it's first load/form invalid/form submission failed
        <SearchBoard loading={loading} error={error} onSubmit={handleSubmit} />
      ) : (
        // Show ProfileBoard if it's successfully get profile information
        <ProfileBoard profile={githubProfile} />
      )}
    </Box>
  );
};

export default App;
