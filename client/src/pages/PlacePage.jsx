import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  useEffect(() => {
    if (!id) return;
    else {
      axios.get(`/places/${id}`).then((response) => {
        setPlace(response.data);
      });
    }
  }, [id]);

  if (!place) return "";
  return (
    <div className="mt-4 bg-gray-100 -mx-8 py-4 px-8">
      <h1 className="text-2xl">{place.title}</h1>
      <a
        className="my-2 block font-semibold underline"
        target="_blank"
        href={"https://maps.google.com/?=" + place.address}
      >
        {place.address}
      </a>
      <div className="grid gap-2 grid-cols-[2fr_1fr]">
        <div>
          {place.photos?.[0]&&(
              <div>
              <img src={"http://localhost:5000/uploads/"+place.photos?.[0]} alt=""/>
              </div>
          )}
        </div>
        <div className="grid gap-2">
            {place.photos?.[1]&&(
              <img src={"http://localhost:5000/uploads/"+place.photos?.[1]} alt=""/>
            )}
            {place.photos?.[2]&&(
              <img src={"http://localhost:5000/uploads/"+place.photos?.[2]} alt=""/>
            )}
        </div>
      </div>
      
    </div>
  );
}
