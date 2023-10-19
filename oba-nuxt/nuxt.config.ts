import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxtjs/sanity"],
  sanity: {
    projectId: "l1iu48um",
		apiVersion: '2022-03-25'
  },
  css: ["@/assets/css/styles.css"]
});