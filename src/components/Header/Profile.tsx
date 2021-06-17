import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Kevin Pagliuca</Text>
          <Text color="gray.300" fontSize="small">
            kevinpagliuca@live.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Kevin Pagliuca" />
    </Flex>
  );
}