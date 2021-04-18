import { Book } from "../models/book";
import { useHttpService } from "./http.service";

const { get, post } = useHttpService();

async function getAll(): Promise<any> {
  const query = {
    query: {
      match_all: {}
    }
  }
  return sendQuery(query);
}

async function search(searchTerm: string): Promise<Book[]> {
  const query = {
    query: {
      match_phrase_prefix: {
        title: {
          query: searchTerm
        }
      }
    },
    sort: [
      "_score"
    ]
  };
  return sendQuery(query);
}

async function sendQuery(query: Object): Promise<Book[]> {
  const data: any = await post('/search/books/_search', query);
  let books = [];
  books = data.hits.hits.map((d: any) => d._source);
  return books;
}

export function useBooksSearchService() {
  return {
    getAll,
    search
  }
}