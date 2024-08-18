const fs = require("fs");

const bookList = (req,res) =>{
    try{
        const read_book_data = JSON.parse(fs.readFileSync("./data/books_data.json","utf8")).map((book,i)=>{
            return {
				id: i + 1,
				title: book.title,
				author: book.author,
				year_written: Math.abs(book.year),
				edition: book.country,
				price: book.pages,
			};
        });
        res.status(200).send(read_book_data);
    }catch(error){
        console.log(error.message);
        req.status(500).json({message : "Internal Server Error"});
    }
}

const bookDetail = (req,res) =>{
    try{
        const read_book_data = JSON.parse(fs.readFileSync("./data/books_data.json","utf8")).map((book,i)=>{
            return {
				id: i + 1,
				title: book.title,
				author: book.author,
				year_written: Math.abs(book.year),
				edition: book.country,
				price: book.pages,
			};
        }).find(({ id }) => id === Number(req.params.id));

        if(!read_book_data){
            res.status(404).json({message : "Book not found"});
        }
        res.status(200).send(read_book_data);
    }catch(error){
        console.log(error.message);
        req.status(500).json({message : "Internal Server Error"});
    }
}

const ejsBooks = (req,res) =>{
    try{
        const read_book_data = JSON.parse(fs.readFileSync("./data/books_data.json","utf8")).map((book,i)=>{
            return {
				id: i + 1,
				title: book.title,
				author: book.author,
				year_written: Math.abs(book.year),
				edition: book.country,
				price: book.pages,
			};
        });
        res.render("bookList", { read_book_data });
    }catch(error){
        console.log(error.message);
        res.status(500).json({message : "Internal Server Error"});
    }
}

module.exports = {bookList, bookDetail, ejsBooks}