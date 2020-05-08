const employees = [{
        name: "Brian Murdock",
        department: "Engineering",
        jobTitle: "Developer",
    },
    {
        name: "Chris Evans",
        department: "Production",
        jobTitle: "Actor",
    },
    {
        name: "Joss Whedon",
        department: "Production",
        jobTitle: "Director",
    },
    {
        name: "Zak Penn",
        department: "Writing",
        jobTitle: "Writer",
    },
    {
        name: "Scarlett Johansson",
        department: "Production",
        jobTitle: "Actor",
    },
    {
        name: "Jann Engel",
        department: "Art",
        jobTitle: "Art Director",
    },
];

// write code that will get all of the UNIQUE departments
// WITHOUT using a for or a while loop

// should look like ['Art', 'Production', 'Engineering', 'Writing']

// A WRONG answer would be:

let answer = [];
for (let i = 0; i < employees.length; i++) {
    const emp = employees[i];
    // because answer is an array, it has a method: includes()
    // this will tell us whether the array contains a specific value
    // returns true or false
    if (!answer.includes(emp.department)) {
        // push is gross unless necessary
        //answer.push(emp.department);

        // using a spread operator is more code to type
        // but in....many cases it's better
        answer = [...answer, emp.department];
    }
}

console.log('loop: ', answer);
// one way
answer = [];
employees.forEach((emp) => {
    if (!answer.includes(emp.department)) {
        answer = [...answer, emp.department];
    }
});

console.log('foreach: ', answer);

const actors = employees.filter((emp) => {
    return emp.jobTitle === 'Actor';
});

console.log('just actors: ', actors);

answer = employees.reduce((prev, emp) => {
    if (!prev.includes(emp.department)) {
        return [...prev, emp.department]
    }
    return prev;
}, []);

console.log('reduced answer: ', answer);


function pure(name) {
    const upper = name.toUpperCase();
    return `Your name is ${upper}`;
}

function impure(name) {
    name = name.toUpperCase();
    return `Your name is ${name}`;
}
console.log(pure('Brian'));
console.log(impure('Brian'));