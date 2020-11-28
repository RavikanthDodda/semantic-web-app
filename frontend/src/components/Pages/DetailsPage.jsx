import React, { useState } from "react";
import { Col, Image, Row, Spinner } from "react-bootstrap";
import ArtworkService from "../../services/ArtworkService";
import ArtworkGrid from "../ArtworkGrid";

function DetailsPage(props) {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  const { artwork } = props.location.state;
  const getRecommendataions = () => {
    const artworks = ArtworkService.getRecommendedArtworks(props.id);
    // setArtworks(artworks);
    //setLoading(false);
  };

  const handleLoading = () => {
    console.log(props);
    if (loading) {
      getRecommendataions();
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    } else {
      return <ArtworkGrid artworks={artworks} />;
    }
  };
  return (
    <React.Fragment>
      <Row>
        <Col lg={5}>
          <Image src="" fluid />
        </Col>
        <Col lg={7}>{artwork.title}</Col>
      </Row>
      <h6>Recommended Artworks</h6>
      {handleLoading()}
    </React.Fragment>
  );
}

export default DetailsPage;
