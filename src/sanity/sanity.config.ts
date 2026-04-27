"use client";
import { defineConfig, buildLegacyTheme } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { dataset, projectId } from "./env";

// Tema do studio Patrícia — paleta laranja + azul
const PATRICIA_ORANGE = "#c25a1f";
const PATRICIA_BLUE = "#0e2a47";
const PATRICIA_CREAM = "#faf6f1";
const PATRICIA_INK = "#1a1d24";
const PATRICIA_GRAY = "#5e6470";

const patriciaTheme = buildLegacyTheme({
    "--brand-primary": PATRICIA_ORANGE,
    "--focus-color": PATRICIA_ORANGE,

    "--main-navigation-color": PATRICIA_BLUE,
    "--main-navigation-color--inverted": PATRICIA_CREAM,

    "--component-bg": PATRICIA_CREAM,
    "--component-text-color": PATRICIA_INK,

    "--default-button-color": PATRICIA_GRAY,
    "--default-button-primary-color": PATRICIA_ORANGE,
    "--default-button-success-color": "#43a463",
    "--default-button-warning-color": "#e07b3a",
    "--default-button-danger-color": "#c43c3c",

    "--state-info-color": PATRICIA_BLUE,
    "--state-success-color": "#43a463",
    "--state-warning-color": "#e07b3a",
    "--state-danger-color": "#c43c3c",

    "--black": "#0a0a0a",
    "--white": "#ffffff",
    "--gray-base": PATRICIA_GRAY,
    "--gray": "#6b7280",
});

export default defineConfig({
    name: "patricia-ianda",
    title: "Patrícia Ianda — CMS",
    projectId: projectId || "placeholder",
    dataset,
    basePath: "/studio",
    theme: patriciaTheme,
    plugins: [
        structureTool({ title: "Conteúdo" }),
        visionTool({ title: "GROQ", defaultApiVersion: "2024-01-01" }),
    ],
    schema: { types: schemaTypes },
});
