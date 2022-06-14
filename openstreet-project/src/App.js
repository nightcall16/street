import React from "react";
import ReactMapboxGl, { Marker, Cluster } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";
import { cameras } from "./cameras";
import MarkerImg from "./media/marker.png";

const ClusterDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: lightgray;
  border: 1px solid gray;
`;

const MRKR = styled.img`
  width: 15px;
  user-select: none;
`;

const clusterMarker = (coordinates, pointCount) => (
  <Marker coordinates={coordinates}>
    <ClusterDiv>{pointCount}</ClusterDiv>
  </Marker>
);

const App = () => {
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoibmlnaHRjYWxsIiwiYSI6ImNsM2oyeWJodTA1bzgzY283aTZmZXRleDcifQ.0kE123XWW5TObVNgHaO2Ow",
  });

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw",
      }}
      center={[44.678079790562414, 43.02949222216009]}
      zoom={[12]}
    >
      <Cluster ClusterMarkerFactory={clusterMarker} zoomOnClick={true}>
        {cameras.map((el, i) => (
          <Marker
            key={i}
            coordinates={[
              el.geometry.coordinates[1],
              el.geometry.coordinates[0],
            ]}
            anchor="bottom"
          >
            <MRKR src={MarkerImg} />
          </Marker>
        ))}
      </Cluster>
    </Map>
  );
};

export default App;
