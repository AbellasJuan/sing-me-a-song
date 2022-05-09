import supertest from "supertest"
import app from "../../src/app.js"

describe("SingMeASong Integration Tests", () => {
    describe("GET /recommendations", () => {
        it("should return all recommendations", async () => {
            
            const response = await supertest(app).get("/recommendations");
            console.log(response.body)
            
            expect(response.status).toEqual(200);

        })
    })

})