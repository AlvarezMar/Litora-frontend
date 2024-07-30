import { useState } from "react";

function CreateBook(){

    const [formData, SetFormData] = useState({
        title: '',
        author: '',
        publisher: '',
        isbn: '',
        tags: '',
        synopsis: '',
        imageURL: '',
        price: '',
        rating: '',
        stock: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        SetFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/api/v1/books/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        })

    }

    return <div className="max-w-screen-xl mx-auto px-10">
        <h1 className="text-2xl font-bold">Create a Book</h1>
        <form action="" onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="">Book Title: 
                <input type="text" name="title" value={formData.title} onChange={handleChange}/>
            </label>

            <label htmlFor="">Book Author: 
                <input type="text" name="author" value={formData.author} onChange={handleChange}/>
            </label>
            <label htmlFor="">Book Publisher: 
                <input type="text" name="publisher" value={formData.publisher} onChange={handleChange}/>
            </label>

            <label htmlFor="">Book ISBN: 
                <input type="text" name="isbn" value={formData.isbn} onChange={handleChange}/>
            </label>
            
            <label htmlFor="">Book Tags: 
                <input type="text" name="tags" value={formData.tags} onChange={handleChange}/>
            </label>

            <label htmlFor="">Book Synopsis: 
                <input type="text" name="synopsis" value={formData.synopsis} onChange={handleChange}/>
            </label>

            <label htmlFor="">Book Image URL: 
                <input type="text" name="imageURL" value={formData.imageURL} onChange={handleChange}/>
            </label>

            <label htmlFor="">Book Price: 
                <input type="number" name="price" value={formData.price} onChange={handleChange}/>
            </label>

            <label htmlFor="">Book Rating (1-5): 
                <input type="number" name="rating" value={formData.rating} onChange={handleChange}/>
            </label>

            <label htmlFor="">Book Stock: 
                <input type="number" name="stock" value={formData.stock} onChange={handleChange}/>
            </label>

            <button className="bg-black text-white font-bold rounded-lg p-2">Create</button>
        </form>
    </div>
}

export default CreateBook;