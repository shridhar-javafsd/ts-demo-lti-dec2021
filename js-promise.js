// problem of asynchronous javascript 

// const getFun = () => {
//     setTimeout(() => {
//         return { message: "some message" };
//     }, 2000);
// }

// const fun = getFun(); // {message: string = 'Some message'}

// console.log(fun.message);

// solution 1 - callback 

// const getFun = (callback) => {
//     setTimeout(() => {
//         callback({ message: "some message" });
//     }, 2000);
// }

// const fun = getFun((arg) => {
//     console.log(arg.message);
// });

// solution 2 - promise 

const getFun = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true; // false / true 
            if (error)
                reject({ message: 'Something is wrong!' });
            else
                resolve({ message: 'Some message' });
        }, 2000);
    });
}

getFun()
    .then((response) => {
        console.log(response.message);
    })
    .catch((error) => {
        console.log(error.message);
    });


