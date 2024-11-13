import { Controller, Get, Post } from '@nestjs/common';

@Controller('first')
export class FirstController {

   @Get() 
   sayHello() {
    return 'Goodbye'
   } 
   @Post('/makla') 
   zidHaja() {
    return {options: 'Bzayed mayonnaise'}
   }
}
