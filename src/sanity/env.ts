export const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset =
    process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const useCdn = false;

/**
 * Sanity está configurado quando há um projectId válido nas env vars.
 * Quando false, o blog cai em conteúdo seed local — útil enquanto o cliente
 * ainda não criou o projeto no Sanity.
 */
export const isSanityConfigured = Boolean(
    projectId && /^[a-z0-9-]+$/.test(projectId)
);
