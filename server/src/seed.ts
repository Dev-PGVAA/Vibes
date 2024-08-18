import { faker } from '@faker-js/faker'
import { Logger } from '@nestjs/common'
import { PrismaClient, Sex } from '@prisma/client'
import { hash } from 'argon2'

import 'dotenv/config'

const prisma = new PrismaClient()

async function main() {
	const NUM_USERS = 10

	for (let i = 0; i < NUM_USERS; i++) {
		const email = faker.internet.email()
		const name = faker.person.fullName()
		const avatar = faker.image.avatar()
		const password = await hash(faker.internet.password())
		const birthday = faker.date.birthdate()
		const countryId = faker.helpers.arrayElement(await prisma.country.findMany({
			select: {
				id: true
			},
			where:{
				name: {
					contains: ''
				}
			}
		}))
		const sex = faker.helpers.arrayElement(Object.values(Sex));
		const createdAt = faker.date.past({ years: 1 })

		const updatedAt = new Date(
			createdAt.getTime() +
				Math.random() * (new Date().getTime() - createdAt.getTime())
		)

		await prisma.user.create({
			data: {
				email,
				name,
				password,
				avatar,
				birthday,
				countryId: countryId.id,
				sex,
				createdAt,
				updatedAt,
			},
		})
	}
}

main()
	.catch(e => {
		Logger.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
