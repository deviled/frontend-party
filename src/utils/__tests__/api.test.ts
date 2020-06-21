import {httpFetchServers, httpLoginUser} from '../api';
import {AUTH_API, SERVERS_API} from '../constants';

const authentication = require('../authentication');

describe('api.ts', () => {
	beforeEach(() => {
		window.fetch = jest.fn();
		authentication.authHeader = jest.fn();
	});

	describe('httpLoginUser', () => {
		it('should call with provided arguments', async () => {
			const user = {username: 'aaaa', password: '123'};
			const params = [AUTH_API, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(user)
			}];
			await httpLoginUser(user);
			expect(fetch).toHaveBeenCalledTimes(1);
			expect(fetch).toHaveBeenCalledWith(...params);
		});
	});

	describe('httpFetchServers', () => {
		it('should call authHeader function', async () => {
			await httpFetchServers();
			expect(authentication.authHeader).toHaveBeenCalledTimes(1);
		});

		it('should call fetch servers with correct url', async () => {
			const params = [SERVERS_API, {
				method: 'GET',
				headers: undefined,
			}];
			await httpFetchServers();
			expect(fetch).toHaveBeenCalledTimes(1);
			expect(fetch).toHaveBeenCalledWith(...params);
		});
	});
});



