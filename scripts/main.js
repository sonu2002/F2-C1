let arr = [
  {
    id: 1,
    name: "john",
    age: 18,
    profession: "developer",
  },
  {
    id: 2,
    name: "jack",
    age: 20,
    profession: "developer",
  },
  {
    id: 3,
    name: "karen",
    age: 19,
    profession: "admin",
  },
];

function printDeveloperByMap() {
  // Write your code here
  // Just console.log

  const developerNames = arr
    .filter(({ profession }) => profession === "developer")
    .map(({ name }) => name);

  console.log(developerNames);
}

function printDeveloperByForEach() {
  // Write your code here
  // Just console.log

  for (const { name, profession } of arr) {
    if (profession === "developer") {
      console.log(name);
    }
  }
}

function addData() {
  // Write your code here
  // Just console.log

  const newName = prompt("Enter your Name");
  const newAge = prompt("Enter your Age");
  const newProfession = prompt("Enter your Profession");

  if (!newName || !newAge || !newProfession) {
    alert("Enter correct information.");
    return;
  }

  arr.push({
    id: arr.length + 1,
    name: newName.trim(),
    age: Number(newAge),
    profession: newProfession.trim(),
  });

  console.log(arr[arr.length - 1]);
}

function removeAdmin() {
  // Write your code here
  // Just console.log
  arr = arr.filter(({ profession }) => profession !== "admin");
  console.log("Administrators have been removed.");
}

function concatenateArray() {
  // Write your code here
  // Just console.log

  const newArr = [
    {
      id: arr.length + 1,
      name: "Rahul",
      age: 25,
      profession: "developer",
    },
    {
      id: arr.length + 2,
      name: "Shubham",
      age: 25,
      profession: "student",
    },
    {
      id: arr.length + 3,
      name: "Sundram",
      age: 25,
      profession: "student",
    },
  ];

  arr = arr.concat(newArr);
  console.log(arr);
}
