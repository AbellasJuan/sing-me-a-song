import supertest from "supertest"
import app from "../../src/app.js"
import { prisma } from "../../src/database.js";

afterAll(() => {
  prisma.$disconnect();
});

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE recommendations RESTART IDENTITY CASCADE;`;
});

describe("GET /recommendations", () => {
    
    it("should return 201 given a valid body", async () => {
        const body = {
            name: "pegadona",
            youtubeLink: "https://www.youtube.com/watch?v=LvR0PFXffsiI",
        }
        
        const response = await supertest(app).post("/recommendations").send(body);
        expect(response.status).toBe(201);
    });
    
    it("should return all recommendations", async () => {

        const body = {
            name: "pegadona",
            youtubeLink: "https://www.youtube.com/watch?v=LvR0PFXffsiI",
        }

        await supertest(app).post("/recommendations").send(body);

        const response = await supertest(app).get("/recommendations");   
        console.log(response.body)         
        expect(response.status).toBe(200);
    });
});