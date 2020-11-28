import React from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import ArtworkGrid from "../ArtworkGrid";
import Dropdown from "../DropdownMenu";
import ArtworkService from "../../services/ArtworkService";
function HomePage() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getArtworks = async (id) => {
    setLoading(true);
    const response = await ArtworkService.getArtworks(id);
    setArtworks(response);
    setLoading(false);
  };
  const handleRender = () => {
    if (artworks.length === 0) {
      return <p>Please select a room from above dropdown list.</p>;
    } else {
      if (loading)
        return (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        );
      else return <ArtworkGrid artworks={artworks} />;
    }
  };

  return (
    <React.Fragment>
      <Dropdown getArtworks={getArtworks} />
      {handleRender()}
    </React.Fragment>
  );
}

export default HomePage;
