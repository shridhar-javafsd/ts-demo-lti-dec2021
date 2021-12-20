
const getFun = () => {
    setTimeout(() => {
        return { message: "some message" };
    }, 2000);
}

const fun = getFun(); // {message: string = 'Some message'}

console.log(fun.message);

