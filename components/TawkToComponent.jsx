"use client";
import React from "react";
import dynamic from "next/dynamic";

const TawkMessengerReact = dynamic(() =>
  import("@tawk.to/tawk-messenger-react")
);

const TawkToComponent = () => {
  return (
    <TawkMessengerReact
      propertyId="66b36f731601a2195ba1c5da"
      widgetId="1i4memnrb"
      autoOpen={false}
    />
  );
};

export default TawkToComponent;
