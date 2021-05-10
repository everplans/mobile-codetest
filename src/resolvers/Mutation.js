
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function post(parent, args, context, info) {
  const { userId } = context;
  const newLink = context.prisma.link.create({
    data: {
      url: args.url,
      description: args.description,
      postedBy: { connect: {id: userId} },
    },
  })
  return newLink
}

async function signup(parent, args, context, info) {
  const password = bcrypt.hashSync(args.password, 10)
  const user = await context.prisma.user.create({ data: {...args, password} })

  const token = jwt.sign({userId: user.id}, APP_SECRET)

  return {
    token, 
    user,
  }
}

async function upvote(parent, args, context, info) {
  //const link = context.prisma.link.findUnique({ where: { id: args.ID}})
  const updateLink = await context.prisma.link.update({
    where: {
      id: parseInt(args.id),
    },
    data: {
      votes: { increment: 1,},
    },
  })

  return updateLink
}

async function downvote(parent, args, context, info) {
  //const link = context.prisma.link.findUnique({ where: { id: args.ID}})
  const updateLink = await context.prisma.link.update({
    where: {
      id: parseInt(args.id),
    },
    data: {
      votes: { decrement: 1,},
    },
  })

  return updateLink
}

async function login(parent, args, context, info) {

  const user = await context.prisma.user.findUnique({ where: { email: args.email}})
  if (!user) {
    throw new Error('No such user found')
  }

  const valid = bcrypt.compareSync(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id}, APP_SECRET)
  
  return {
    token,
    user
  }
}

module.exports = {
  signup,
  login,
  post,
  upvote,
  downvote,
}