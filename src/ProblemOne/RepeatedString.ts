const repeatedString = (name: string, repeatNo: number = 3) => {
    if (repeatNo > 0) {
       return name.repeat(repeatNo)
    }
}

 const result=repeatedString("abc",10)
 console.log(result);