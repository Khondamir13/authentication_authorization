import { Body, Controller, Post } from '@nestjs/common';
import { CreateBookDto } from './dto/book.dto';
import { BookService } from './book.service';
import { Roles } from 'src/auth/role/role.decorator';
import { Role } from 'src/auth/role/role.enum';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}   

    @Post()
    @Roles(Role.ADMIN) // Only allow users with the ADMIN role to create books
    createBook(@Body() createBookDto: CreateBookDto) {
        return this.bookService.createBook(createBookDto);
    }
}
