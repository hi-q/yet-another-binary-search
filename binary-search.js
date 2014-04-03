/**
 * Created by Pavel on 4/3/2014.
 */

/**
 * don't forget the enumerable should be sorted
 */
var binarySearch = {

    /**
     * Recursive version of binary search
     * @param {Array<Number>} enumerable
     * @param {Number} key
     * @param {Number} min
     * @param {Number} max
     */
    searchRecursive: function (enumerable, key, min, max) {
        var middle = Math.floor((min + max) / 2), // this is enough anyway

            isNothingToSearch = max < min,
            isKeyGreater = enumerable[middle] > key,
            isKeyLower = enumerable[middle] < key;


        if (isNothingToSearch) {
            return;
        }

        if (isKeyGreater) {
            return binarySearch.searchRecursive(enumerable, key, min, middle - 1);
        }

        if (isKeyLower) {
            return binarySearch.searchRecursive(enumerable, key, middle + 1, max);
        }

        return middle;
    }
},

    sortedEnumerable = [1, 12, 20, 30, 32, 40, 50, 54, 100];

console.log('recursive: ' + binarySearch.searchRecursive(sortedEnumerable, 30,  0, sortedEnumerable.length - 1));
console.log('recursive: ' + binarySearch.searchRecursive(sortedEnumerable, 1,  0, sortedEnumerable.length - 1));
console.log('recursive: ' + binarySearch.searchRecursive(sortedEnumerable, 100,  0, sortedEnumerable.length - 1));

