import {authHeader} from './authentication';
import {AUTH_API, SERVERS_API} from './constants';

export function httpFetchServers() {
	return fetch(SERVERS_API, {
		method: 'GET',
		headers: authHeader()
	});
}

export interface ILoginUserProps {
	username: string | null;
	password: string | null;
}

export function httpLoginUser({username, password}: ILoginUserProps) {
	return fetch(AUTH_API, {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({username, password}),
	});
}