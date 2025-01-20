```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({name: 'John'}, {$inc: {age: 1}});
//Alternative solution if age was initially a string
db.collection('myCollection').updateOne({name: 'John'}, {$set: {age: parseInt(age)+1}});
```