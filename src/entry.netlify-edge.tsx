/*
 * WHAT IS THIS FILE?
 *
 * It's the entry point for Netlify Edge when building for production.
 *
 * Learn more about the Netlify integration here:
 * - https://qwik.dev/docs/deployments/netlify-edge/
 *
 */
import {
  createQwikRouter,
  type PlatformNetlify,
} from "@qwik.dev/router/middleware/netlify-edge";
import qwikRouterConfig from "@qwik-router-config";
import { manifest } from "@qwik-client-manifest";
import render from "./entry.ssr";

declare global {
  interface QwikCityPlatform extends PlatformNetlify {}
}

export default createQwikRouter({ render, qwikRouterConfig, manifest });
