import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/book.dto';

@Injectable()
export class BookService {

    private readonly books = [{
        id: 1,
        title: 'Sample Book',
        description: 'This is a sample book description'
    },{
        id:2,
        title: 'Another Book',
        description: 'This is another book description'
    }];

    createBook(createBookDto: CreateBookDto) {
        const newBook = {
            id: this.books.length + 1,
            ...createBookDto
        };
        this.books.push(newBook);
        return newBook;
    }
}
