const handleRatingArray = (arrayOfRating) => {
  const upSumOfRating = arrayOfRating
    .map((rating, index) => rating * (index + 1))
    .reduce((acumulator, current) => acumulator + current);
  const sumOfRating = arrayOfRating.reduce(
    (acumulator, current) => acumulator + current
  );
  if (!sumOfRating) return '0.0';
  return (upSumOfRating / sumOfRating).toFixed(1);
};
