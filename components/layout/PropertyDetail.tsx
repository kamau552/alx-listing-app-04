import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div>
      <h1>{property.name}</h1>
      <p>{property.address.city}, {property.address.country}</p>
      <p>{property.price} per night</p>
      <p>{property.description}</p>
      {/* You can also show categories, rating, etc */}
    </div>
  );
};

export default PropertyDetail;