import { Body, Controller, Post } from '@nestjs/common'


import { User } from 'prisma/generated/client'
import { Auth } from 'src/user/decorators/auth.decorator'
import { CurrentUser } from 'src/user/decorators/user.decorator'
import { MakePaymentDto } from './dto/make-payment.dto'
import { TransactionService } from './transaction.service'

@Controller('transaction')
export class TransactionController {
	constructor(private readonly transactionService: TransactionService) {}

	@Post('make-payment')
	@Auth()
	makePayment(@Body() dto: MakePaymentDto, @CurrentUser() user: User) {
		return this.transactionService.makePayment(dto, user)
	}
}
