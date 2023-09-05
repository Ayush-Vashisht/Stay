import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../Perks";
import axios from "axios";

export default function PlacePage() {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }
  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }
  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  async function addPhotoByLink(ev) {
    ev.preventDefault();
    const { data: fileName } = await axios.post("/upload-by-link", {
      link: addedPhotos,
    });
    setAddedPhotos((prev) => {
      return [...prev, fileName];
    });
    // setAddedPhotos('');
  }
  return (
    <div>
      {action != "new" && (
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
      )}

      {action == "new" && (
        <div>
          <form>
            {preInput(
              "Title",
              "Title for your place. should be short and catchy as in advertisement"
            )}
            <input
              type="text"
              placeholder="title(for example:my lovely apt.)"
              value={title}
              onChange={(ev) => {
                setTitle(ev.target.value);
              }}
            />
            {preInput("Address", "Address to this place")}
            <input
              type="text"
              placeholder="address"
              value={address}
              onChange={(ev) => {
                setAddress(ev.target.value);
              }}
            />
            {preInput("Photos", "more=better")}
            <div className="flex gap-1">
              <input
                type="text"
                placeholder="add using link...jpg"
                value={addedPhotos}
                onChange={(ev) => {
                  setAddedPhotos(ev.target.value);
                }}
              />
              <button
                onClick={addPhotoByLink}
                className="bg-gray-500 px-4 rounded-2xl"
              >
                Add&nbsp;photo
              </button>
            </div>
            <div className="mt-2 grid grid-cols-3 md:grid-cols:4 lg:grid-cols:6">
              {addedPhotos.length > 0 &&
                addedPhotos.map(link => (<div key={link}><img className="rounded-2xl w-full object-cover" src={'http://localhost:5000/uploads/'+link} alt=""/></div>))}
              <button className="flex gap-1 justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="1 1 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                upload
              </button>
            </div>
            {preInput("Description", "description of place")}
            <textarea
              className="w-full border bg-transparent "
              value={description}
              onChange={(ev) => {
                setDescription(ev.target.value);
              }}
            />
            <h2 className="text-2xl mt-4">Perks</h2>
            <p className="text-gray-500 text-sm">
              select all the perks of your place
            </p>
            <Perks
              selected={perks}
              onChange={(ev) => {
                setPerks(ev.target.value);
              }}
            />
            <h2 className="text-2xl mt-5">Extra info</h2>
            <p className="text-gray-500 text-sm">
              add check in and out times, remember to have some time window for
              cleaning the room between guests
            </p>
            <textarea
              className="mt-2 w-full border "
              value={extraInfo}
              onChange={(ev) => {
                setExtraInfo(ev.target.value);
              }}
            />
            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb-1">Check in time</h3>
                <input
                  type="text"
                  placeholder="00:00"
                  value={checkIn}
                  onChange={(ev) => {
                    setCheckIn(ev.target.value);
                  }}
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Check out time</h3>
                <input
                  type="text"
                  placeholder="00:00"
                  value={checkOut}
                  onChange={(ev) => {
                    setCheckOut(ev.target.value);
                  }}
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max guests</h3>
                <input
                  type="text"
                  placeholder=""
                  value={maxGuests}
                  onChange={(ev) => {
                    setMaxGuests(ev.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <button className="primary my-4">Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
