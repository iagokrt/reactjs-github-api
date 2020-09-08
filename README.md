# readme

E.G. [https://github.com/iagokrt/reactjs-github-api](https://github.com/iagokrt/reactjs-github-api)

github_explorer

![preview failed :(](https://github.com/iagokrt/reactjs-github-api/blob/master/preview.gif)

Axios sample:

```tsx
// api.ts File

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;

// API.ts
```

Styled-components | GlobalStylings

```tsx
// './styles/global.ts'
import { createGlobalStyle } from 'styled-components'

import Background from '../assets/github.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f4f4f4 url(${Background}) no-repeat 70% top;
    -webkit-font-smoothing:  antialiased;
  }

  body, input, button {
    font: 16px 'Ubuntu', sans-serif;
  }

	.
	.
	.

  button {
    cursor: pointer;
  }
`;
```

Importando o estilo Global no Main App como um component usando a técnica do fragment do react.

```tsx
import GlobalStyle from './styles/global'

const App: React.FC = () => (
  <>
    <AppOrders />
		<GlobalStyle />
  </>
);

export default App;
```

# Linting de código com eslint

## .eslintrc.json

```json
{
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
      "prettier/prettier": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-filename-extension": [1, { "extensions": ".tsx"}],
      "import/prefer-default-export": "off",
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          "allowExpressions": true
        }
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never",
          "tsx": "never"
        }
      ]
    },
    "settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
}
```

- + Prettier e editorConfig

## Tsconfig

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react"
  },
  "include": [
    "src"
  ]
}
```


## localstorage mechanics

```js
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@githubExplorer:repositories');

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return [];
    }
  });

  // and

    useEffect(() => {
    localStorage.setItem('@githubExplorer:repositories', JSON.stringify(repositories));
  }, [repositories])
```


