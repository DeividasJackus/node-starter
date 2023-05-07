import fetch, { type RequestInfo, type RequestInit } from "node-fetch";

type Todo = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

type Request = RequestInfo | URL;

async function fetchData<T>(request: Request, init?: RequestInit) {
	const response = await fetch(request, init);
	const todo = await response.json();
	return todo as Promise<T>;
}

async function fetchTodo(id: number) {
	const a = { b: 42 };
	console.log("test", a);
	return fetchData<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
}

const todoId = 1;
const todo = await fetchTodo(todoId);
console.log(`Todo: ${todo.title}`);
