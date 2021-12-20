var getFun = function () {
    setTimeout(function () {
        return { message: "some message" };
    }, 2000);
};
var fun = getFun(); // {message: string = 'Some message'}
console.log(fun.message);
