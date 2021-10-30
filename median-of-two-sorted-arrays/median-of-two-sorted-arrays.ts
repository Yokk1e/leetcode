function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const arrGroup = [...nums1, ...nums2].sort((a, b) => a - b);
      if (arrGroup.length % 2 === 0) {
        if (arrGroup.length === 2) {
          return (arrGroup[0] + arrGroup[1]) / 2;
        } else {
          const middleIndex = (arrGroup.length / 2) - 1;
          return (arrGroup[middleIndex] + arrGroup[middleIndex + 1]) / 2;
        }
      } else {
        const middleIndex = Math.floor(arrGroup.length / 2);
        return arrGroup[middleIndex];
      }
};