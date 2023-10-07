const p1 = new Promise ((resolve, rejeact) => {
    const arr =[1, 2, 3, 4, 5, 6];
    let isExist = arr.includes(5);
    if (isExist) {
        resolve({name:"jeel"});
    }else{
        rejeact()
    }
    console.log("isExist",isExist);
});
p1.then((res1) =>{
    console.log(res1);
    return {city : "surat"}
})
.then((res2) => {
    console.log(res2);
    return {age : "20"}
})

.then((res3) => {
    console.log(res3)
})

.catch((err) => {
    console.log("err---->",err)
})