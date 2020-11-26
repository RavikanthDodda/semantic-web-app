import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import Artwork from "../Artwork";
import ArtworkService from "../../services/ArtworkService";

function HomePage() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArtworks = async () => {
      setLoading(true);
      const response = await ArtworkService.getArtworks();
      setArtworks(response.data);
      setLoading(false);
    };
    getArtworks();
  }, []);
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <Row>
        {artworks.map((artwork) => (
          <Col md={4} lg={3}>
            <Artwork
              title={artwork.data}
              image={artwork.image}
              text={artwork.text}
            />
          </Col>
        ))}
      </Row>
    );
  }
}

export default HomePage;
