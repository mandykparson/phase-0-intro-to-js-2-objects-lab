// Write your solution in this file!
const employee = {
    name: "Mandy",
    streetAddress: "3146 West 3rd Ave"
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    console.log(object)
    const updatedEmployee = {...object}
    updatedEmployee[key] = value;
    return updatedEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromEmployeeByKey(object, key) {
    const updatedEmployee = {...object}
    delete updatedEmployee[key]
    return updatedEmployee
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return employee;
}