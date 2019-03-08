let favChannels = ['Mr. Beast', 'Traversy Media', 'Tech Lead', 'CS50', 'CS Dojo',
  'KSI', 'Flying Beast', 'Be YouNick', 'The Viral Fever', 'Gaurav Sen', 'Rachit Jain', 'The Food Ranger', 'Casey Neistat'
];

favChannels.unshift('Pewdiepie'); // Add Pewdiepie at first of array
favChannels.pop(); // Remove last element of array

// Printing elements in array
for (let i = 0; i < favChannels.length; i++) {
  console.log(favChannels[i]);
}

// Printing the length of array
console.log(favChannels.length);