import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailsApi } from "../store/detailsReducer/details.acitons";
import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";

const MovieDetailsPage = () => {
  const { details, isLoading, isError } = useSelector((state) => state.details);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailsApi(id));
  }, [id]);

  return (
    <div>
      <Grid
        templateAreas={`
        "poster title title title"
        "poster runtime rating votes"
        "poster details details details"
        "poster details details details"
        "plot  details details details"
        
        `}
        p="100px"
        gap="10px"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem
          bgImage={details.Poster}
          bgPos={"center"}
          bgRepeat={"no-repeat"}
          bgClip={"content-box"}
          bgSize="contain"
          w="600px"
          h="820px"
          borderRadius={"20px"}
          boxShadow={"lg"}
          m="10px"
          overflow={"hidden"}
          area={"poster"}
        ></GridItem>
        <GridItem
          p="20px"
          borderRadius={"20px"}
          boxShadow={"lg"}
          area={"title"}
        >
          <Heading>{details.Title}</Heading>
        </GridItem>
        <GridItem
          p="20px"
          borderRadius={"20px"}
          boxShadow={"lg"}
          area={"runtime"}
        >
          <Text>Runtime:</Text>
          <Heading size="md">{details.Runtime}</Heading>
        </GridItem>
        <GridItem
          p="20px"
          borderRadius={"20px"}
          boxShadow={"lg"}
          area={"rating"}
        >
          <Text>imdbRating:</Text>

          <Heading size="md">{details.imdbRating}</Heading>
        </GridItem>
        <GridItem
          p="20px"
          borderRadius={"20px"}
          boxShadow={"lg"}
          area={"votes"}
        >
          <Text>imdbVotes:</Text>

          <Heading size={"md"}>{details.imdbVotes}</Heading>
        </GridItem>
        <GridItem
          p="20px"
          w="600px"
          borderRadius={"20px"}
          boxShadow={"lg"}
          area={"plot"}
        >
          <Text>Plot:</Text>

          <Text>{details.Plot}</Text>
        </GridItem>
        <GridItem
          p="20px"
          borderRadius={"20px"}
          boxShadow={"lg"}
          area={"details"}
          textAlign={"left"}
        >
          <Text p="10px" m="10px" borderRadius={"20px"} boxShadow={"base"}>
            Actors:{details.Actors}
          </Text>
          <Text p="10px" m="10px" borderRadius={"20px"} boxShadow={"base"}>
            BoxOffice:{details.BoxOffice}
          </Text>
          <Text p="10px" m="10px" borderRadius={"20px"} boxShadow={"base"}>
            Awards:{details.Awards}
          </Text>
          <Text p="10px" m="10px" borderRadius={"20px"} boxShadow={"base"}>
            Type:{details.Type}
          </Text>
          <Text p="10px" m="10px" borderRadius={"20px"} boxShadow={"base"}>
            Country:{details.Country}
          </Text>
          <Text p="10px" m="10px" borderRadius={"20px"} boxShadow={"base"}>
            DVD:{details.DVD}
          </Text>
          <Text p="10px" m="10px" borderRadius={"20px"} boxShadow={"base"}>
            Released:{details.Released}
          </Text>
          <Text p="10px" m="10px" borderRadius={"20px"} boxShadow={"base"}>
            Director{details.Director}
          </Text>
          <Text p="10px" m="10px" borderRadius={"20px"} boxShadow={"base"}>
            Genre:{details.Genre}
          </Text>
          <Text p="10px" m="10px" borderRadius={"20px"} boxShadow={"base"}>
            Language:{details.Language}
          </Text>
        </GridItem>
      </Grid>
    </div>
  );
};

export default MovieDetailsPage;
