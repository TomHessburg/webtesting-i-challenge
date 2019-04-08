const enhancer = require('./enhancer.js');
// test away!

let exampleFullItem = {
    name: "item name",
    durability: 100,
    enhancement: 20
}
let exampleDurabilityReducedItem = {
    name: "item name",
    durability: 50,
    enhancement: 20
}
let exampleEnhReducedItem = {
    name: "item name",
    durability: 100,
    enhancement: 14
}
let enh16 = {
    name: "item name",
    durability: 100,
    enhancement: 16
}

let less15 = {
    name: "item name",
    durability: 100,
    enhancement: 14
}

describe('enhancer.js', () => {
    describe('enhancer', () => {
        it('should return a repaired object', () => {
            expect(enhancer.repair(exampleFullItem)).toEqual({...exampleFullItem});
            expect(enhancer.repair(exampleDurabilityReducedItem)).toEqual({...exampleDurabilityReducedItem, durability: 100});
        }) 

        it('should enhance the object according to the set rules...', () => {
            expect(enhancer.succeed(exampleFullItem)).toEqual(exampleFullItem);
            expect(enhancer.succeed(exampleEnhReducedItem)).toEqual({...exampleEnhReducedItem, enhancement: 15 });
        }) 
        it('should fail to enhance the object according to the set rules...', () => {
                //greater than 16
            expect(enhancer.fail(exampleFullItem)).toEqual({...exampleFullItem, durability: 90, enhancement: 19 });
                //equals 16
                expect(enhancer.fail(enh16)).toEqual({...enh16, durability: 90})
                //less than 15
                expect(enhancer.fail(less15)).toEqual({...less15, durability: 95})
        }) 
    })
})