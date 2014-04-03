/**
 * Created by Pavel Kostenkov on 4/3/2014.
 * You can do whatever you want with this code :)
 */


/**
 * This is enough anyway
 * @param {Number} min
 * @param {Number} max
 * @returns {number}
 */
function getMiddle(min, max) {
    return Math.floor((min + max) / 2);
}

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
            var middle = getMiddle(min, max),

                isNothingToSearch = max < min,
                isKeyLower = enumerable[middle] > key,
                isKeyGreater = enumerable[middle] < key;


            if (isNothingToSearch) {
                return;
            }

            if (isKeyLower) {
                return binarySearch.searchRecursive(enumerable, key, min, middle - 1);
            }

            if (isKeyGreater) {
                return binarySearch.searchRecursive(enumerable, key, middle + 1, max);
            }

            return middle;
        },

        /**
         * Iterative version of binary search
         * @param {Array<Number>} enumerable
         * @param {Number} key
         * @param {Number} min
         * @param {Number} max
         */
        searchIterative: function (enumerable, key, min, max) {
            var middle,

                isKeyGreater,
                isKeyLower,
                isFound;

            while (max >= min) {
                middle = getMiddle(min, max);

                isFound = enumerable[middle] === key;
                isKeyLower = enumerable[middle] > key;
                isKeyGreater = enumerable[middle] < key;

                if (isFound) {
                    return middle;
                }

                if (isKeyGreater) {
                    min = middle + 1;
                }

                if (isKeyLower) {
                    max = middle - 1;
                }
            }
        }
    },

    sortedEnumerable = [1, 12, 20, 30, 32, 40, 50, 54, 100];

console.log('recursive: ' + binarySearch.searchRecursive(sortedEnumerable, 30, 0, sortedEnumerable.length - 1));
console.log('recursive: ' + binarySearch.searchRecursive(sortedEnumerable, 1, 0, sortedEnumerable.length - 1));
console.log('recursive: ' + binarySearch.searchRecursive(sortedEnumerable, 100, 0, sortedEnumerable.length - 1));

console.log('iterative: ' + binarySearch.searchIterative(sortedEnumerable, 30, 0, sortedEnumerable.length - 1));
console.log('iterative: ' + binarySearch.searchIterative(sortedEnumerable, 1, 0, sortedEnumerable.length - 1));
console.log('iterative: ' + binarySearch.searchIterative(sortedEnumerable, 100, 0, sortedEnumerable.length - 1));

