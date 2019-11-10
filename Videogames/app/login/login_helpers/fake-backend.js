const users = JSON.parse(localStorage.getItem('users')) || [];

export function configureFakeBackend() {
  const realFetch = window.fetch;
  window.fetch = function fakebackendFunctioning(url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
          const params = JSON.parse(opts.body);

          const filteredUsers = users.filter(
            user =>
              user.username === params.username &&
              user.password === params.password,
          );

          if (filteredUsers.length) {
            const user = filteredUsers[0];
            const responseJson = {
              id: user.id,
              username: user.username,
              firstName: user.firstName,
              lastName: user.lastName,
              token: 'fake-jwt-token',
            };
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(responseJson)),
            });
          } else {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject('Username or password is incorrect');
          }

          return;
        }

        if (url.endsWith('/users') && opts.method === 'GET') {
          if (
            opts.headers &&
            opts.headers.Authorization === 'Bearer fake-jwt-token'
          ) {
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(users)),
            });
          } else {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject('Unauthorised');
          }

          return;
        }

        if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
          if (
            opts.headers &&
            opts.headers.Authorization === 'Bearer fake-jwt-token'
          ) {
            const urlParts = url.split('/');
            const id = parseInt(urlParts[urlParts.length - 1], 10);
            const matchedUsers = users.filter(user => user.id === id);
            const user = matchedUsers.length ? matchedUsers[0] : null;

            resolve({ ok: true, text: () => JSON.stringify(user) });
          } else {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject('Unauthorised');
          }

          return;
        }

        if (url.endsWith('/users/register') && opts.method === 'POST') {
          const newUser = JSON.parse(opts.body);

          const duplicateUser = users.filter(
            user => user.username === newUser.username,
          ).length;
          if (duplicateUser) {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject(`Username "${newUser.username}" already exists`);
            return;
          }

          newUser.id = users.length
            ? Math.max(...users.map(user => user.id)) + 1
            : 1;
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));

          resolve({ ok: true, text: () => Promise.resolve() });

          return;
        }

        if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
          if (
            opts.headers &&
            opts.headers.Authorization === 'Bearer fake-jwt-token'
          ) {
            const urlParts = url.split('/');
            const id = parseInt(urlParts[urlParts.length - 1], 10);
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < users.length; i++) {
              const user = users[i];
              if (user.id === id) {
                users.splice(i, 1);
                localStorage.setItem('users', JSON.stringify(users));
                break;
              }
            }

            resolve({ ok: true, text: () => Promise.resolve() });
          } else {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject('Unauthorised');
          }

          return;
        }

        realFetch(url, opts).then(response => resolve(response));
      }, 500);
    });
  };
}
