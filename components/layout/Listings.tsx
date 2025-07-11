import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyCard from "@/components/common/PropertyCard";

export default function ListingsPage() {
  return (
    <div className="pl-10 pr-10 p-4">
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {PROPERTYLISTINGSAMPLE.map((property, index) => (
        <PropertyCard key={index} data={property} />
      ))}
      </div>

      {/*Show More*/}
      <div className="w-full flex justify-center mt-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center rounded-full bg-gray-900 text-white text-sm h-10 px-5 cursor-pointer">
            Show more
          </div>
          <a href="#" className="mt-1.5 text-sm text-gray-700">
            Click to see more listings
          </a>
        </div>
      </div>
    </div>
  );
}
