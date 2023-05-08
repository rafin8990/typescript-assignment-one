const reverse = <T>(...data: T[]): T[] => {
    return data.reverse()
}
const fruits= ["apple", "banana", "cherry"];
const result = reverse(...fruits)
console.log(result);