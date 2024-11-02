import React from "react";

function Routes(props){
    const {projection, routes, selectedAirlineID} = props;
    // TODO: 
    // return the routes of the selected airline; 
    // If the selectedAirlineID is null (i.e., no airline is selected), return <g></g>.
    if (!selectedAirlineID) return <g></g>;
    
    return (
        <g>
            {routes
                .filter(route => route.AirlineID === selectedAirlineID)
                .map((route, i) => {
                    const [sourceX, sourceY] = projection([route.SourceLongitude, route.SourceLatitude]);
                    const [destX, destY] = projection([route.DestLongitude, route.DestLatitude]);
    
                    return (
                        <line
                            key={i}
                            x1={sourceX}
                            y1={sourceY}
                            x2={destX}
                            y2={destY}
                            stroke="#9d2f2e"
                            strokeWidth={0.7}
                            opacity={0.1}
                        />
                    );
                })}
        </g>
    );
}
export { Routes };