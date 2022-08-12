import React from "react";
import { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { FcHome } from "react-icons/fc";

const GoogleMaps = ({ children, center, ...props }) => {
  const ref = useRef();
  const [map, setMap] = useState();
  useEffect(() => {
    setMap(
      new window.google.maps.Map(ref.current, {
        center,
        zoom: 14,
      })
    );
  }, []);
  useEffect(() => {
    if (!map) return;
    // adds listener to run clickHandler when
    // user clicks on map
    // const _listener = map.addListener("click", clickHandler);
    // return () => {
    //   google.maps.event.removeListener(_listener);
    // };
  }, [map]);
  return (
    <React.Fragment>
      <Button
        variant="succes m-3"
        style={{ backgroundColor: "#73b1c1", width: "250px" }}
        href="javascript: history.go(-1)"
      >
        <FcHome /> Ir atras
      </Button>
      <div
        ref={ref}
        id="map"
        // {...props}
        style={Object.assign(
          {
            width: "100%",
            height: "50vh",
            margin: "1rem 0",
          }
          //   props.style
        )}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            // set the map prop on the child component
            return React.cloneElement(child, { map });
          }
        })}
      </div>
    </React.Fragment>
  );
};

export default GoogleMaps;
