// can extract for loop to separate function
const RemoveDuplicates = () => {
  const removeDuplicates = (arr) => {
    return [...new Set(arr)];
  };
  return (
    <>
      <h2>Remove duplicates from Sorted Array</h2>
      <p>
        Given a sorted array arr[] of size n, the goal is to rearrange the array
        so that all distinct elements appear at the beginning in sorted order.
        Additionally, return the length of this distinct sorted subarray.
      </p>
      Array - [2, 2, 2, 2, 2] op:
      {removeDuplicates([2, 2, 2, 2, 2])}
      <br />
      Array - [1, 2, 2, 3, 4, 4, 4, 5, 5] op:
      {removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5, 5])}
      <br />
      Array - [1, 2, 3] op:
      {removeDuplicates([1, 2, 3])}
      {/* https://www.geeksforgeeks.org/remove-duplicates-sorted-array/ */}
    </>
  );
};

export default RemoveDuplicates;
