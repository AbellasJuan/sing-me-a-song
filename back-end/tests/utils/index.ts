import { prisma } from "../../src/database.js";
import { CreateRecommendationData } from "../../src/services/recommendationsService.js";

type RecommendationComplete = {
  id: number
  name: string
  youtubeLink: string
  score: number
}

export function findAll(){
  return prisma.recommendation.findMany();
};

export function create(createRecommendationData: CreateRecommendationData | RecommendationComplete ) {
  return prisma.recommendation.create({
    data: createRecommendationData,
  });
}