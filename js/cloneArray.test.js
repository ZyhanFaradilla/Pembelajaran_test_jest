const cloneArray = require("./cloneArray")

test("Memastikan Array yang Ada Sama Seperti Haisl", ()=>{
    const array = [1,2,3,4,5];
    expect(cloneArray(array)).toStrictEqual(array)
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})