import { Link, useParams } from "react-router-dom";
import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
import PLaceImg from "../PlaceImg";

export default function PlacePage() {
  const {id} = useParams();
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/user-place").then(({ data }) => {
      setPlaces(data);
    });
  }, [id]);

  return (
    <div>
      <AccountNav />
      <div className="text-center">
        <Link
          className=" inline-flex gap-1 bg-primary py-2 px-6 text-white rounded-full"
          to={"/account/places/new"}
        >
          <svg
            xmlns="https://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add new place
        </Link>
      </div>
      <div className="mt-4">
        {places.length > 0 &&
          places.map((place) => 
            <div key={place}>
              <Link to ={"/account/places/"+place._id} className=" flex gap-4 mt-4 bg-gray-100 -mx-8 px-8 pt-8 ">
                
                <div className="bg-gray-300 h-14 w-32 grow mb-4 shrink-0 rounded-xl">
                  <PLaceImg place={place} />
                </div>
                <div className="grow-0 shrink">
                  <h1 className="text-xl">{place.title}</h1>
                  <p className="text-sm mt-2 mb-2">{place.description}</p>
                </div>
              </Link>
            </div>
          )}
      </div> 
    </div>
  );
}
