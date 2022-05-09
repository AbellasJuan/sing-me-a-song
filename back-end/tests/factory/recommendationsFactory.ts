import { faker } from "@faker-js/faker";
import { prisma } from "../../src/database";
import { CreateRecommendationData } from "../../src/services/recommendationsService";

export function createRecommendationBody(){
  return {
    name: faker.random.words(6),
    youtubeLink: `https://www.youtube.com/watch?v=LvR0PFX9si${faker.random.alphaNumeric(5)}`
  };
};

export async function createRecommendation(data: CreateRecommendationData) {
  return await prisma.recommendation.create({
    data,
  });
}