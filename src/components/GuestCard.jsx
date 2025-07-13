import { useList } from "../Context";

export default function GuestCard({ guest }) {
    const {toggleExpand} = useList()
    return (
        <article
            className="card"
        >
            <p>
                Name: {guest.name}
            </p>
            <p>
                Email: {guest.email}
            </p>
            <p>
                Phone #: {guest.phone}
            </p>
            <p>
                Bio: {guest.bio}
            </p>
            <p>
                Job: {guest.job}
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