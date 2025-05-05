import { lazy } from "react";

export const HomeCharactesrs = lazy(() => import("./pages/characters/Characters"));
export const HomePlanets = lazy(() => import("./pages/planets/Planets"));
export const HomeTransformations = lazy(() => import("./pages/transformations/Transformations"));
export { default as Nav } from "./organisms/nav/Nav";
