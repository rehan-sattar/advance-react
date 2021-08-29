const index = require("./index")
// @ponicode
describe("index.saveComments", () => {
    test("0", () => {
        let callFunction = () => {
            index.saveComments("f31df64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.saveComments("d8e3987")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.saveComments("adcb112")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.saveComments("879365a")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.saveComments(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.changeAuth", () => {
    test("0", () => {
        let callFunction = () => {
            index.changeAuth(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.changeAuth(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.changeAuth(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
