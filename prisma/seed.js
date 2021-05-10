const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const steve = await prisma.user.create({ data: {name: "steve", email: "steve@sample.com"} })
  const alice = await prisma.user.create({ data: {name: "alice", email: "alice@sample.com"} })

  const createLink = async (url, description, votes, user) => {
    await prisma.link.create({
      data: {
        url,
        description,
        votes,
        postedBy: { connect: {id: user.id}}
      },
    })
  }
  
  await createLink( "https://giphy.com/gifs/computer-cat-wearing-glasses-VbnUQpnihPSIgIXuZv", "Professor Cat", 20, alice)
  await createLink( "https://giphy.com/gifs/reddit-doing-lJNoBCvQYp7nq", "I have no idea what i am doing", 0, alice)
  await createLink( "https://giphy.com/gifs/facepalm-yFQ0ywscgobJK", "Sleepy Cat", 0, steve)
  await createLink( "https://giphy.com/gifs/hallmarkecards-cute-hallmark-shoebox-BzyTuYCmvSORqs1ABM", "I have the power!", 203, alice)
  await createLink( "https://giphy.com/gifs/wiggle-shaq-13CoXDiaCcCoyk", "Shaq Wiggle", 0, alice)
  await createLink( "https://giphy.com/gifs/badass-boye-kiBcwEXegBTACmVOnE", "I can drive!", 23993, steve)
  await createLink( "https://giphy.com/gifs/happiness-9fuvOqZ8tbZOU", "Sleepy puppy", 20, steve)
  await createLink( "https://giphy.com/gifs/reaction-mood-gGeyr3WepujbGn7khx", "Nope DOg", 290, alice)
  await createLink( "https://giphy.com/gifs/cute-aww-eyebleach-2bUqez1VlOCInOZLTp", "Struggle is real", 0, alice)
  await createLink( "https://giphy.com/gifs/doge-shibe-54Vj1kxvgyF4k", "Too much doge", 0, steve)
  await createLink( "https://giphy.com/gifs/cat-kitten-gato-VIPdgcooFJHtC", "Dis one mine", 3920, alice)
}

  main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  });
