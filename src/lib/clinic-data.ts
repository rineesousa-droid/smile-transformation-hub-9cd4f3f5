/**
 * Fonte única de dados da clínica — informações oficiais confirmadas pela cliente.
 */

export const CLINIC = {
  brand: "YL Odontologia",
  professional: {
    fullName: "Dra. Yasmin Lopes",
    cro: "CRO-CE 9237",
    role: "Cirurgiã-dentista — Facetas em resina e Harmonização facial",
    since: "2018",
    education: ["Graduação em Odontologia — Universidade de Fortaleza (UNIFOR)"],
  },
  contact: {
    instagram: "https://instagram.com/ylodontologia",
    instagramHandle: "@Ylodontologia",
    /** Preencher quando a cliente enviar o link do perfil de avaliações. */
    googleReviewsUrl: "",
  },
  hours: [
    { days: "Segunda a sexta", time: "09:00 às 18:00" },
    { days: "Sábado", time: "09:00 às 13:00" },
  ],
  units: [
    {
      id: "aldeota",
      name: "YL Aldeota",
      short: "Aldeota",
      address:
        "Av. Santos Dumont, 2122 — Sala 106 — Edifício Manhattan Center — Aldeota — Fortaleza/CE",
      whatsapp: "5585986244795",
      whatsappDisplay: "(85) 98624-4795",
      mapQuery: "Av.+Santos+Dumont+2122+Manhattan+Center+Aldeota+Fortaleza",
      /** Preencha com o link oficial do Google Maps quando disponível. */
      mapUrl: "",
    },
    {
      id: "sao-cristovao",
      name: "YL São Cristóvão",
      short: "São Cristóvão",
      address: "Av. Castelo de Castro, 428 — Jangurussu — Fortaleza/CE",
      whatsapp: "5585992730484",
      whatsappDisplay: "(85) 99273-0484",
      mapQuery: "Av.+Castelo+de+Castro+428+Jangurussu+Fortaleza",
      mapUrl: "",
    },
    {
      id: "bezerra",
      name: "YL Bezerra de Menezes",
      short: "Bezerra de Menezes",
      address:
        "Av. Bezerra de Menezes, 1250 — Sala 2103 — São Gerardo — Edifício Momentum Office — Fortaleza/CE",
      whatsapp: "5585992579590",
      whatsappDisplay: "(85) 99257-9590",
      mapQuery: "Av.+Bezerra+de+Menezes+1250+Momentum+Office+Fortaleza",
      mapUrl: "",
    },
  ],
  /** Credenciais de autoridade — dados confirmados pela profissional. */
  credentials: [
    { key: "since", value: "Desde 2018", label: "Atuação profissional" },
    { key: "education", value: "UNIFOR", label: "Universidade de Fortaleza" },
    { key: "cro", value: "CRO-CE 9237", label: "Registro profissional" },
    { key: "units", value: "3 unidades", label: "Em Fortaleza — CE" },
  ],
} as const;

/** Retorna o link de mapa da unidade (oficial, se cadastrado). */
export function unitMapUrl(u: { mapUrl?: string; mapQuery: string }) {
  return u.mapUrl || `https://www.google.com/maps?q=${u.mapQuery}`;
}

/** Embed do Google Maps sem necessidade de API Key. */
export function unitMapEmbedUrl(u: { mapQuery: string }) {
  return `https://www.google.com/maps?q=${u.mapQuery}&z=16&output=embed`;
}

export type Unit = (typeof CLINIC.units)[number];
export type UnitId = Unit["id"];
