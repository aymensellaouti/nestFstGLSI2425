import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './user.dto';

@Controller('first')
export class FirstController {

   @Get() 
   sayHello() {
    return 'Goodbye'
   } 
   @Post('/user') 
   zidHaja(
    @Body() user: UserDto
   ) {
    console.log({user})
    return {options: 'Bzayed mayonnaise'}
   }
}
