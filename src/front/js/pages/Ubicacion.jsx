import React from "react";
import { useRef, useState, useEffect } from "react";
const Ubicacion = () => {
  const ref = useRef();
  const [map, setMap] = useState();
  useEffect(() => {
    setMap(
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
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
      <div
        ref={ref}
        id="map"
        // {...props}
        style={Object.assign(
          {
            width: "100%",
            height: "100px",
            margin: "1rem 0",
          }
          //   props.style
        )}
      >
        {/* {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            // set the map prop on the child component
            return React.cloneElement(child, { map });
          } */}
        {/* })} */}
      </div>
    </React.Fragment>
  );
};

export default Ubicacion;
