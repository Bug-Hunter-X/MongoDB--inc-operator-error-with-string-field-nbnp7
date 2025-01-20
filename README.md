# MongoDB $inc Operator Error with String Field

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment a numeric field by a specified value. However, attempting to increment a string field will result in an error or unexpected behavior.

## Bug
The `bug.js` file contains the incorrect usage of the `$inc` operator with a string field. This will result in an error or unexpected behavior depending on the MongoDB version.

## Solution
The `bugSolution.js` file provides the corrected code.  Before incrementing, ensure the field is of the correct data type (number). If needed, convert the field to a number before using `$inc`.

## How to reproduce
1. Clone this repository
2. Run `bug.js` and observe the error or unexpected behavior
3. Run `bugSolution.js` to see the correct usage of the $inc operator