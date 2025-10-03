    //Destructuring an array
    const [firstName, lastName] = ["Tom", "Brady"];
    console.log(firstName);
    console.log(lastName);

    //Destructuring an object. Must use same property name. Can use alias name
    const { name = userName, age } = {
    name: "Max",
    age: 34,
    };

    console.log(userName);
    console.log(age);
