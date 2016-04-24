import md5 from 'blueimp-md5';

export const server = {
  port: 3000,
};

export const staticPage = {
  pathToTemplate: './app/index.html',
  title: 'React-exemple',
  metas: {
    keywords: 'react, redux, immutable, webpack, babel, es6, javascript, boilerplate, git, github',
    description: 'webpack + react + redux + immutable ;)',
  },
  container: {
    id: 'main',
    role: 'main',
  },
};

export const api = {
  keys: {
    public: 'yourpublickey',
    private: 'yourprivatekey',
    timestamp: '1234',
  },
  md5: md5('timestamp + privateKey + publicKey'),
  path: 'path/to/your/api',
};
