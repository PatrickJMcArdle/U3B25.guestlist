import { useList } from "../Context";

export default function GuestCard({ guest }) {
    const {toggleExpand} = useList()
    return (
        <article
            className="card"
        >
            <p>
                {guest.name}
            </p>
            <p>
                {guest.email}
            </p>
            <p>
                {guest.phone}
            </p>
            <p>
                {guest.bio}
            </p>
            <p>
                {guest.job}
            </p>
            <button
                onClick={() => {
                    toggleExpand();
                }}
            >
                Back
            </button>
        </article>
    )
}