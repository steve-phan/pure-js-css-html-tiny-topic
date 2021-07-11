let string = `Enough is enough!
Alice and Bob were on a holiday. Both of them took many
 pictures of the places they've been, and now they want t
 o show Charlie their entire collection. However, Charlie 
 doesn't like these sessions, since the motive usually repeats.
  He isn't fond of seeing the Eiffel tower 40 times. 
  He tells them that he will only sit during the session if 
  they show the same motive at most N times. Luckily,
   Alice and Bob are able to encode the motive as a number.
    Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. 
For example if N = 2, and the input is [1,2,3,1,2,1,2,3],
 you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, 
 and then take 3, which leads to [1,2,3,1,2,3].

`;

function deleteNth(arr, x) {
  let objSorted = {};
  let xi = arr.filter(function (n) {
    objSorted[n] = (objSorted[n] || 0) + 1;
    return objSorted[n] <= x;
  });
  console.log(objSorted);
  return xi;
}

let m = deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 5);
console.log(m);
