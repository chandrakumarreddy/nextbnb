import PropTypes from 'prop-types';
import Link from 'next/link';

export default function House({ id, picture, type, title, town, rating, reviewsCount }) {
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

House.propTypes = {
    id: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    town: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviewsCount: PropTypes.number.isRequired
};
