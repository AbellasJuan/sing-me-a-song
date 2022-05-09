import YouTubePlayer from "react-player/youtube";
import { prisma } from "../src/database.js"

async function main(){

    if(1 === 1) return;

    await prisma.recommendation.createMany({
        data: 
        [
            {
                name: "pegadinha",
                youtubeLink: "https://www.youtube.com/watch?v=LvR0PFX9siI",
            },
            {
                name: "casimiro",
                youtubeLink: "https://www.youtube.com/watch?v=Qdg7QC1sFbA",
                score: 23,
            }
        ]
    })

}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(async() => {
        await prisma.$disconnect();
    });