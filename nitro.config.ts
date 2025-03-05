import cfBinding from "nitro-cloudflare-dev";

//https://nitro.unjs.io/config
export default defineNitroConfig({
  compatibilityDate: "2025-03-05",
  modules: [cfBinding],
  srcDir: "src",
  preset: 'cloudflare',
  minify: true,
  rollupConfig: {
    external: ['cloudflare:sockets'],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        verbatimModuleSyntax: false,
        moduleResolution: 'bundler',
      },
    }
  },
  logLevel: 4,
  // cloudflareDev: {
  //   configPath: './wrangler.toml',
  // },
});
