
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "src/**/*.graphql",
  generates: {
    "./src/utils/__autogen__/graphql.ts": {
      //preset: "client", used only in case no plugins it will duplicate graptypes
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo"
      ],
      config:{
        wintHooks: true,
      }
    }
  }
};

export default config;
