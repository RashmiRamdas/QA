// can extract for loop to separate function
const RotateArrayByDPosition = () => {
  const rotateArrayByDPosition = (arr, d) => {
    if (d > arr.length) {
      d = d - arr.length;
    }

    // reverse first d elements
    let j = d - 1;
    for (let i = 0; i < d; i++) {
      if (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
      }
    }

    // reverse remaining arr.length - d elements
    j = arr.length - 1;
    for (let i = d; i < arr.length; i++) {
      if (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
      }
    }

    // reverse entire array
    j = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
      if (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
      }
    }
    console.log(arr);
    return arr;
  };
  return (
    <>
      <h2>Rotate an Array by d – Counterclockwise or Left</h2>
      <p>
        Given an array of integers arr[] of size n, the task is to rotate the
        array elements to the left by d positions.
      </p>
      Array - [1, 2, 3, 4, 5, 6], position = 2 op:
      {rotateArrayByDPosition([1, 2, 3, 4, 5, 6], 2)}
      <br />
      Array - [1, 2, 3], position = 5 op: {rotateArrayByDPosition([1, 2, 3], 5)}
      {/* https://www.geeksforgeeks.org/array-rotation/ */}
    </>
  );
};

export default RotateArrayByDPosition;
