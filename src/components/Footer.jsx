import { Box, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Box backgroundColor={"blue"} mt={4}>
        <Text
          textAlign={"center"}
          fontWeight={"semibold"}
          fontSize={"lg"}
          color={"gray.200"}
          pb={1}
        >
          Have fun with the events !!!
        </Text>
      </Box>
    </>
  );
};