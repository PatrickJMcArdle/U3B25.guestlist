export default function GuestInfo({ guest }) {
    return (
      <div>
        <article
            className="info"
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
        </article>
      </div>
    )
}