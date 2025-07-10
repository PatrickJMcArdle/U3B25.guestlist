import useQuery from "./useQuery";
import { useList } from "./Context";
import { useState } from "react";
import { guestlist } from "./data";
import Guests from "./components/Guests";
import GuestCard from "./components/GuestCard";


export default function App() {
  const [selectedGuest, setSelectedGuest] = useState()
  const {expand} = useList()
  const {data: guests, loading, error} = useQuery("/guests");

  if(loading) return <p>Loading...</p>
  if(error || !guests) return <p>{error}</p>
  return (
    <>
      <h1>Guest List</h1>
      {expand === false && <Guests
        guests={guests}
        setSelectedGuest={setSelectedGuest}
      />}
      {expand === true && selectedGuest && <GuestCard guest={selectedGuest} />}
    </>
  );
}