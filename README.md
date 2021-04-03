npm init -y

npm i @apollo/client @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome cookie graphql isomorphic-unfetch next react react-dom react-hook-form react-loader-spinner styled-components

npm i @types/cookie @types/node @types/react @types/react-dom @types/react-loader-spinner @types/styled-components babel-plugin-styled-components typescript --save-dev

"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
},

- tsconfig.json

{
  "compilerOptions": {
    "allowJs": true,
    "alwaysStrict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "lib": ["dom", "es2017"],
    "module": "esnext",
    "moduleResolution": "node",
    "noEmit": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": ["node_modules"],
  "include": ["**/*.ts", "**/*.tsx", "next.config.js"]
}

-styled.d.ts

import 'styled-components'

import { theme } from './src/theme'

declare module 'styled-components' {
  type Theme = typeof theme
  export interface DefaultTheme extends Theme {}
}

-next-env.d.ts

-.babelrc

{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}
