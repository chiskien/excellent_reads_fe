import {Book} from "../models/book.ts";

export const endpoints = "http://localhost:8080/books";

export async function getAllBook(): Promise<Book[]> {
    const response = await fetch(endpoints);
    return await response.json();
}



