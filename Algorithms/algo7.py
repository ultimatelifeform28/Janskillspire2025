# Given two arrays zip them together: Given [1,3,5],[2,4] return [1,3,5,2,4]. ​

def zip_arrays(arr1, arr2):
    return arr1 + arr2

print(zip_arrays([1, 3, 5], [2, 4]))

# Array: Remove At. Given array and an index into array, remove and return the array value at that index. Do this without using any built-in array methods except pop() for JS. Don't use pop(index) (with param use pop without param) or del for python, this would create a one line solution. Think of popFront(arr) as equivalent to removeAt(arr,0). Given [1,2,3,4,5], 2 return and  remove the value 3

''' 
Don't use the following methods below for python:

arr = [1,2,3,4,5]

del arr[2]
arr.pop(2)

Use:
arr.pop()
'''

def remove_at(arr, index):
    value = arr[index]
    for i in range(index, len(arr) - 1):
        arr[i] = arr[i + 1]
    arr.pop()
    return value

print(remove_at([1, 2, 3, 4, 5], 2))