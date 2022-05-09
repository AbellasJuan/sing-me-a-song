import supertest from "supertest"
import app from "../../src/app.js"
import { prisma } from "../../src/database.js";
import { createRecommendationBody } from "../factory/recommendationsFactory.js";

afterAll(() => {
  prisma.$disconnect();
});

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE recommendations RESTART IDENTITY CASCADE;`;
});

describe("GET /recommendations", () => {
        
    it("should return all recommendations", async () => {
        const body = createRecommendationBody();
        await supertest(app).post("/recommendations").send(body);
        const response = await supertest(app).get("/recommendations");           
        expect(response.status).toBe(200);
    });

    it.todo(" get /random")
    it.todo(" get /top/:amount")
    it.todo(" get /:id Pega uma recomendação pelo seu ID. ")
    
});

describe("POST /recommendations", () => {
    
    it("should return 201 given a valid body", async () => {
        const body = createRecommendationBody();
        const response = await supertest(app).post("/recommendations").send(body);
        expect(response.status).toBe(201);
    });

    it('should not create a new recommendation given an invalid body', async () => {
		const body = {};
		const response = await supertest(app).post('/recommendations').send(body);
		expect(response.status).toEqual(422);
	});

    it.todo(" post /:id/upvote Adiciona um ponto à pontuação da recomendação. Não espera nada no corpo.")

    it.todo(" post /:id/downvote - Remove um ponto da pontuação da recomendação. Não espera nada no corpo. - Se a pontuação fica abaixo de -5, a recomendação deve ser excluída.")
    
});