import type { CodegenConfig } from "@graphql-codegen/cli"

// Application Architecture || Define Variables
// =======================================================================================
// =======================================================================================
const config: CodegenConfig = {
  schema: [
    {
      [`${process.env.NEXT_PUBLIC_DOMAIN_CEREBRO_GRAPHQL}/v1/graphql`]: {
        headers: {
          Authorization: `Bearer ${process.env.CEREBRO_GRAPHQL_JWT}`,
        },
      },
    },
  ],
  generates: {
    "server/foreign-sdks/sdk-cerebro-graphql/cerebro-graphql-types.ts": {
      plugins: ["typescript"],
      config: {
        skipTypename: true,
        enumsAsTypes: true,
        scalars: {
          uuid: "string",
          timestamptz: "string",
          timestamp: "string",
          jsonb: "Record<string, unknown>",
          json: "Record<string, unknown>",
          bigint: "number",
          numeric: "number",
          float8: "number",
          date: "string",
          time: "string",
          timetz: "string",
          citext: "string",
          bpchar: "string",
          _text: "string[]",
          _uuid: "string[]",
        },
      },
    },
  },
}

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export default config
