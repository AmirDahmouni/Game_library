import { Heading } from "@chakra-ui/react";
import { connect } from "react-redux";

const GameHeading = ({ genre, platform }: any) => {

  if (platform || genre)
    return (
      <Heading as='h1' marginY={5} >
        {`${platform || ''} ${genre || ''} games`}
      </Heading>
    )
  else
    return null
}

const mapStateToProps = ({ genresState, platformsState }: any) => {
  return {
    genre: genresState.selectedGenre || null,
    platform: platformsState.selectedPlatform || null
  };
};

export default connect(mapStateToProps)(GameHeading);

