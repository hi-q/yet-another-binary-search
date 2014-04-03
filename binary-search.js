/**
 * Created by Pavel Kostenkov on 4/3/2014.
 * You can do whatever you want with this code :)
 *
 * Yeah, I know 'JS common objects prototype extending is bad blah blah..'.
 */


Array.prototype.searchBinary = function (key, searchType) {
    var enumerable = this,

        min = 0,
        max = enumerable.length - 1,

        defaultSearchType = Array.prototype.searchBinary.types.recursive;

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
     * Recursive version of binary search
     * @param {Array<Number>} enumerable
     * @param {Number} key
     * @param {Number} min
     * @param {Number} max
     */
    function searchRecursive(enumerable, key, min, max) {
        var middle = getMiddle(min, max),

            isNothingToSearch = max < min,
            isKeyLower = enumerable[middle] > key,
            isKeyGreater = enumerable[middle] < key;


        if (isNothingToSearch) {
            return;
        }

        if (isKeyLower) {
            return searchRecursive(enumerable, key, min, middle - 1);
        }

        if (isKeyGreater) {
            return searchRecursive(enumerable, key, middle + 1, max);
        }

        return middle;
    }

    /**
     * Iterative version of binary search
     * @param {Array<Number>} enumerable
     * @param {Number} key
     * @param {Number} min
     * @param {Number} max
     */
    function searchIterative(enumerable, key, min, max) {
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

    // Sometimes it's actually not so bad to use switch
    switch(searchType || defaultSearchType) {
        case Array.prototype.searchBinary.types.recursive: return searchRecursive(enumerable, key, min, max);
        case Array.prototype.searchBinary.types.iterative: return searchIterative(enumerable, key, min, max);
    }

};


/**
 * Binary search types
 * @readonly
 * @enum {Number}
 */
Array.prototype.searchBinary.types = {
    recursive: 0,
    iterative: 1
};

console.log('recursive: ' + [1, 12, 20, 30, 32, 40, 50, 54, 100].searchBinary(30, [].searchBinary.recursive));
console.log('recursive: ' + [1, 12, 20, 30, 32, 40, 50, 54, 100].searchBinary(1, [].searchBinary.recursive));
console.log('recursive: ' + [1, 12, 20, 30, 32, 40, 50, 54, 100].searchBinary(100, [].searchBinary.recursive));

console.log('recursive: ' + [1, 12, 20, 30, 32, 40, 50, 54, 100].searchBinary(30, [].searchBinary.iterative));
console.log('recursive: ' + [1, 12, 20, 30, 32, 40, 50, 54, 100].searchBinary(1, [].searchBinary.iterative));
console.log('recursive: ' + [1, 12, 20, 30, 32, 40, 50, 54, 100].searchBinary(100, [].searchBinary.iterative));
