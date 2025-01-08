const MergeSortedArrays = () => {
  const mergeTwoSortedArrays = (arr1, arr2) => {
    const len1 = arr1.length;
    const len2 = arr2.length;
    const finalArr = [];
    let j = 0;
    let k = 0;
    for (let i = 0; i < len1 + len2; i++) {
      if (arr1[j] < arr2[k]) {
        finalArr.push(arr1[j]);
        j++;
      } else {
        finalArr.push(arr2[k]);
        k++;
      }
    }
    return finalArr;
  };

  return (
    <>
      <h2>Merge two sorted arrays</h2>
      <p>
        Given two sorted arrays, the task is to merge them in a sorted manner.
      </p>
      Array - [1, 3, 4, 5], [2, 4, 6, 8] ={" "}
      {mergeTwoSortedArrays([1, 3, 4, 5], [2, 4, 6, 8])}
      <br />
      Array - [5, 8, 9], [4, 7, 8, 14, 15, 16] ={" "}
      {mergeTwoSortedArrays([5, 8, 9], [4, 7, 8, 14, 15, 16])}
      <br />
      Array - [1, 2, 3, 4, 5], [4, 7, 18] ={" "}
      {mergeTwoSortedArrays([1, 2, 3, 4, 5], [4, 7, 18])}
      <br />
      Array - [1, 3, 5], [2, 4, 6, 8, 10] ={" "}
      {mergeTwoSortedArrays([1, 3, 5], [2, 4, 6, 8, 10])}
      <br />
      Array - [1, 2, 3, 4, 5], [6, 7, 8] ={" "}
      {mergeTwoSortedArrays([1, 2, 3, 4, 5], [6, 7, 8])}
      {/* https://www.geeksforgeeks.org/merge-two-sorted-arrays/ */}
    </>
  );
};

export default MergeSortedArrays;
