//PROBLEM 1

// Function to check if an element exists in an array
function contains(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}


function sumOfDistinctElements(set1, set2) {
    let sum = 0;

    
    for (let i = 0; i < set1.length; i++) {
        if (!contains(set2, set1[i])) {
            sum += set1[i];
        }
    }

    
    for (let j = 0; j < set2.length; j++) {
        if (!contains(set1, set2[j])) {
            sum += set2[j];
        }
    }

    return sum;
}

let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];

console.log("Problem 1 Output:", sumOfDistinctElements(set1, set2));



//PROBLEM 2
//PROCEDURE VERSION
function dot_product_procedure(v1, v2, ps) {
    ps.value = 0;

    for (let i = 0; i < v1.length; i++) {
        ps.value += v1[i] * v2[i];
    }
}

// Algorithm to check orthogonality using PROCEDURE
function checkOrthogonalProcedure(v1, v2) {
    let ps = { value: 0 };

    dot_product_procedure(v1, v2, ps);

    if (ps.value === 0) {
        console.log("Vectors are ORTHOGONAL (Procedure)");
    } else {
        console.log("Vectors are NOT orthogonal (Procedure)");
    }
}



//FUNCTION VERSION
function dot_product_function(v1, v2) {
    let ps = 0;

    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }

    return ps;
}

// Algorithm to check orthogonality using FUNCTION
function checkOrthogonalFunction(v1, v2) {
    let result = dot_product_function(v1, v2);

    if (result === 0) {
        console.log("Vectors are ORTHOGONAL (Function)");
    } else {
        console.log("Vectors are NOT orthogonal (Function)");
    }
}




let vector1 = [1, 2, 3];
let vector2 = [-3, 0, 1]; 

checkOrthogonalProcedure(vector1, vector2);
checkOrthogonalFunction(vector1, vector2);




//MULTIPLE PAIRS OF VECTORS

let vectorsA = [
    [1, 0],
    [2, 3],
    [1, -1]
];

let vectorsB = [
    [0, 1],
    [-3, 2],
    [1, 1]
];

for (let i = 0; i < vectorsA.length; i++) {
    console.log(`\nChecking pair ${i + 1}`);
    checkOrthogonalFunction(vectorsA[i], vectorsB[i]);
}
