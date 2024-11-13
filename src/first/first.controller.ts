import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('first')
export class FirstController {

   @Get() 
   sayHello() {
    return 'Goodbye'
   } 
   @Post('/makla') 
   zidHaja(
    @Body() data
   ) {
    console.log({data})
    return {options: 'Bzayed mayonnaise'}
   }
}
