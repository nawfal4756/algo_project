export const methods = [
  {
    id: "insertion",
    name: "Insertion Sort",
    description:
      "No extra data structure is being used except the input array so the space complexity will be O(1) And the best case time complexity is O(n) when we apply insertion sort on an already sorted array and it will only compare n elements with their predecessors. But, if we have to apply the insertion sort on an unsorted array will require insertions at the beginning of the sorted array making it the worst time complexity O(n^2)",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
  },
  {
    id: "bubble",
    name: "Bubble Sort",
    description:
      "A constant amount of memory is used apart from the input array so the space complexity will be O(1) If no swapping is done, it means we have sorted the array and the time complexity will become linear O(n) but in the worst case it will be O(n^2)",
    timeComplexity: "O(n^2)",
    spaceComplexity: "O(n)",
  },
  {
    id: "merge",
    name: "Merge Sort",
    description:
      "An auxiliary array of size n is used to store the sorted array, which requires a space complexity of O(n) On the other hand, its time complexity is O(nlogn) because it first decomposes the array into subarrays that take logn time and then merges them in a sorted order that requires n time.",
    timeComplexity: "O(nlog(n))",
    spaceComplexity: "O(n)",
  },
  {
    id: "heap",
    name: "Heap Sort",
    description:
      "No other data structure is used in heap sort so the space complexity is O(1) The extraction in heap structure of n elements takes logn time after that, only n-1 elements remained that will take log(n-1) time, and so on. The total time complexity sums up to O(nlogn) in a simpler form.",
    timeComplexity: "O(nlog(n))",
    spaceComplexity: "O(n)",
  },
  {
    id: "quick",
    name: "Quick Sort",
    description:
      "Space complexity when the pivot occurs in the middle of the array every time will be O(logn), but if the pivot occurs at the end or the start of the array, it will become O(n) Worst-case time complexity is O(n^2) when there are duplicates in the array or we choose the right-most or left-most element in the array. Else it will become O(nlogn) when the pivot is chosen in the middle.",
    timeComplexity: "O(n*log(n))",
    spaceComplexity: "O(n*log(n))",
  },
  {
    id: "radix",
    name: "Radix Sort",
    description:
      "The space complexity will be O(n+k) to hold counts, indices and output arrays. The time complexity is O(n*k) where n is the number of elements in the array to be sorted, and k is the count of each number in the input array.",
    timeComplexity: "O(nd)",
    spaceComplexity: "O(n+2^d)",
  },
  {
    id: "bucket",
    name: "Bucket Sort",
    description:
      "O(k) memory is used to store k empty buckets and then we will divide an array of n elements in to these buckets considering that we will use insertion sort to sort every bucket the space complexity will become O(n+k) Time complexity is linear.",
    timeComplexity: "O(n^2)",
    spaceComplexity: "O(n^2)",
  },
  {
    id: "counting",
    name: "Counting Sort",
    description:
      "O(k) space is required because we are using an auxiliary array. The time complexity is O(n+k) because we iterate on the auxiliary array as well as on the input array.",
    timeComplexity: "O(k)",
    spaceComplexity: "O(k)",
  },
  {
    id: "modifiedQuick",
    name: "Modified Quick Sort (7.4.5)",
    description:
      "We are applying quicksort to break the array of n elements in the length k and then apply insertion sort on that array that sums up a time complexity of O(nk+nlogn/k). Only one array of size n is used to store the sorted elements. That makes up the space complexity as O(n).",
    timeComplexity: "O(nk+nlogn/k)",
    spaceComplexity: "O(n)",
  },
  {
    id: "boundedCount",
    name: "Bounded Count Sort (8.2.4)",
    description:
      "Two auxiliary arrays of size max+1 are used so the space complexity will be O(max+1). The time complexity is O(n + (max+1)) due to traversing of auxiliary arrays as well as the input array.",
    timeComplexity: "O(n + (max+1))",
    spaceComplexity: "O(max+1)",
  },
];
