import faker from "@faker-js/faker";
import { array } from "joi";
import YouTubePlayer from "react-player/youtube";
import supertest from "supertest"
import app from "../../src/app.js"
import { prisma } from "../../src/database.js";
import { createRecommendation, createRecommendationBody } from "../factory/recommendationsFactory.js";

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

});

describe('GET /recommendations/top/:amount', () => {
	it('should return recommendations by amount', async () => {
        let body = {...createRecommendationBody(), score: 100};
        let body2 = {...createRecommendationBody(), score: 200}
        let body3 = {...createRecommendationBody(), score: 300};;
        await createRecommendation(body);
        await createRecommendation(body2);
        await createRecommendation(body3);

        const amount = faker.finance.amount(1, 3, 0)
		const response = await supertest(app).get(`/recommendations/top/${amount}`);

		expect(response.status).toEqual(200);
	});
});

    it.todo(" get /:id Pega uma recomendação pelo seu ID. ")

describe('GET /recommendations/random', () => {
	it('should return a random recommendation', async () => {
        const body = createRecommendationBody();
        const body2 = createRecommendationBody();
        await createRecommendation(body);
        await createRecommendation(body2);
		const response = await supertest(app).get('/recommendations/random');

		expect(response.status).toEqual(200);
	});

    it('should 404 without data', async () => {
		const response = await supertest(app).get('/recommendations/random');
		expect(response.status).toEqual(404);
	});
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