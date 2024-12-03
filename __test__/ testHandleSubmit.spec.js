import "babel-polyfill";

import { handleSubmit } from "../src/fe/js/formHandler"

describe("test submit is normal", () => {
    test("Test function handleSubmit", () => {
           expect(handleSubmit).toBeDefined();
})});