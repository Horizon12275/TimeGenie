import { BASEURL, Delete, get, post, put } from "./requestService";
const PREFIX = `${BASEURL}/api/event`;

export const getAllBooks = async () => {
  const url = `${PREFIX}/list`;
  let result;
  try {
    result = await get(url);
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const searchBooks = async ({ keyword, page, pageSize }) => {
  const url = `${PREFIX}/search?keyword=${keyword}&page=${page}&pageSize=${pageSize}`;
  let result;
  try {
    result = await get(url);
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const categoryBooks = async ({ tag, page, pageSize }) => {
  const url = `${PREFIX}/category?tag=${tag}&page=${page}&pageSize=${pageSize}`;
  let result;
  try {
    result = await get(url);
    return result;
  } catch (e) {
    console.log(e);
    alert(e);
  }
};

export const getRecommendedBooks = async () => {
  const url = `${PREFIX}/recommend/4`;
  let result;
  try {
    result = await get(url);
    return result;
  } catch (e) {
    console.log(e);
  }
};

// 在 services/bookService.js 文件中

export async function getBookById(bookId) {
  const url = `${PREFIX}/get/${bookId}`;
  let result;
  try {
    result = await get(url);
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteBookById(bookId) {
  const url = `${PREFIX}/admin/delete/${bookId}`;
  let result;

  result = await Delete(url);
  return result;
}

export async function updateBook(book) {
  const url = `${PREFIX}/admin/update/${book.id}`;
  let result;

  result = await put(url, book);
  return result;
}

export async function addBook(book) {
  const url = `${PREFIX}/admin/add`;
  let result;

  result = await post(url, book);
  return result;
}

export async function getTopBooks({ start, end }) {
  const url = `${PREFIX}/admin/rank?start=${start}&end=${end}&nums=20`;
  let result;

  result = await get(url);
  return result;
}