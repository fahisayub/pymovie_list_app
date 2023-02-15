import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ Poster, imdbID, Title, Type, Year }) => {
  const navigate = useNavigate();

  let getDetails = () => {
    console.log(imdbID);
    navigate(`/details/${imdbID}`);
  };
  return (
    <Box
      bgImage={Poster}
      bgPos={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"full"}
      bgClip={"content-box"}
      w="300px"
      h="420px"
      borderRadius={"20px"}
      boxShadow={"lg"}
      m="10px"
      overflow={"hidden"}
      onClick={getDetails}
    >
      <Box
        bg="telegram.500"
        borderRadius={"20px"}
        m="10px"
        color={"white"}
        mt="100%"
      >
        <Heading size={"md"}>{Title}</Heading>
        <Text>Type:{Type}</Text>
        <Text>Year:{Year}</Text>
      </Box>
    </Box>
  );
};

export default MovieCard;
