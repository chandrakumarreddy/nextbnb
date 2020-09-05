import Link from "next/link";

export default function House({
  id,
  picture,
  type,
  title,
  town,
  rating,
  reviewsCount,
}) {
  return (
    <Link href="/houses/[id]" as={`/houses/${id}`}>
      <a>
        <img src={picture} alt={title} width="100%" height="100%" />
        <p>
          {type}-{town}
        </p>
        <p>{title}</p>
        <p>
          {rating} ({reviewsCount})
        </p>
      </a>
    </Link>
  );
}
