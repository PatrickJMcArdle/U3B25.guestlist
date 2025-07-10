import GuestInfo from "./GuestInfo";
import { useList } from "../Context"

export default function Guests({ guests, setSelectedGuest }) {
    const {toggleExpand} = useList()
    return (
        <article className="list">
            {guests.map((guest) => {
                return (
                    <a
                        key={guest.id}
                        onClick={() =>{
                            toggleExpand(); setSelectedGuest(guest)}}
                    >
                        <GuestInfo guest={guest} />
                    </a>
                )
            })}
        </article>
    )
}