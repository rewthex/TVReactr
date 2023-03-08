import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
	const starList = [];
	const starFillCount = Math.floor(rating);
	const hasHalfStar = rating - parseInt(rating) >= 0.5;
	const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

	for (let i = 1; i <= starFillCount; i++) {
		starList.push(<StarFill key={"star-fill" + i} />);
	}

	if (hasHalfStar) {
		starList.push(<StarHalf key={"star-half"} />);
	}

	for (let i = 1; i <= emptyStarCount; i++) {
		starList.push(<StarEmpty key={"star-empty" + i} />);
	}

	return <div>{starList}</div>;
}
