const handleRatingArray = (arrayOfRating) => {
  const upSumOfRating = arrayOfRating
    .map((rating, index) => rating * (index + 1))
    .reduce((accumulator, current) => accumulator + current);
  const sumOfRating = arrayOfRating.reduce(
    (acumulator, current) => acumulator + current
  );
  if (!sumOfRating) return '0.0';
  return (upSumOfRating / sumOfRating).toFixed(1);
};

const handleRatingPercentage = (rating, arrayOfRating) => {
  const sumOfRating = arrayOfRating.reduce(
    (accumulator, current) => accumulator + current
  );
  const ratingPersentage = (rating / sumOfRating) * 100;
  return ratingPersentage;
};
