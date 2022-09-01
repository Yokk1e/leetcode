func trap(height []int) int {
   left, right := 0, len(height)-1
	leftMax, rightMax := height[left], height[right]
	count := 0
	for left < right {
		if leftMax < rightMax {
			left += 1
			if height[left] > leftMax { leftMax = height[left] }
			count += leftMax - height[left]
		} else {
			right -= 1
			if height[right] > rightMax { rightMax = height[right] }
			count += rightMax - height[right]
		}
	}
	return count
}