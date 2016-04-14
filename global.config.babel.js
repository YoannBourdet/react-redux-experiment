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
    public: '934a84e99e7f9e70757a026718b6e063',
    private: 'ade7137ef2f069fa3af6aa11f1005de35829554c',
    timestamp: 'api',
  },
  md5: md5('apiade7137ef2f069fa3af6aa11f1005de35829554c934a84e99e7f9e70757a026718b6e063'),
  path: '',
};
