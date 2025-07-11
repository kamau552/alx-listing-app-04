import React from "react";
import { PropertyProps } from "@/interfaces";
import ReviewSection from "../property/ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div>
      <h1>{property.name}</h1>
      <p>{property.address.city}, {property.address.country}</p>
      <p>{property.price} per night</p>
      <p>{property.description}</p>
      {/* You can also show categories, rating, etc */}
      <ReviewSection propertyId={property.id} />

    </div>
  );
};

export default PropertyDetail;