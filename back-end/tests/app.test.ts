import supertest from "supertest"
import app from "../src/app.js"

describe("SingMeASong Integration Tests", () => {
    describe("GET /recommendations", async () => {
        it("should return all recommendations", async () => {
            
            const response = await supertest(app).get("/recommendations");
            
            expect(response.status).toEqual(200);

        })
    })

})