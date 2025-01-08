const SortedAndRotated = () => {
  const isSortedAndRotated = (arr) => {
    const len = arr.length;
    let count = 0;

    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[(i + 1) % len]) {
        count++;
      }
    }

    if (count > 1) {
      return "Not Sorted";
    } else {
      return "Sorted and Rotated";
    }
  };
  return (
    <>
      <h2>Check if an array is sorted and rotated</h2>
      <p>
        Given an array arr[] of size n, the task is to return true if it was
        originally sorted in non-decreasing order and then rotated (including
        zero rotations). Otherwise, return false. The array may contain
        duplicates.
      </p>
      Array - [3, 4, 5, 1, 2] = {isSortedAndRotated([3, 4, 5, 1, 2])}
      <br />
      Array - [3, 4, 6, 1, 2, 5] = {isSortedAndRotated([3, 4, 6, 1, 2, 5])}
      {/* https://www.geeksforgeeks.org/check-if-an-array-is-sorted-and-rotated/ */}
      {/* https://www.geeksforgeeks.org/how-much-dsa-is-required-for-front-end-developer-interview/ */}
    </>
  );
};

export default SortedAndRotated;
