import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'list of messages';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body.content);
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
