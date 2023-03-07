export const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
} as const;

export type HttpStatus =
  (typeof HTTP_STATUS_CODES)[keyof typeof HTTP_STATUS_CODES];

export const ABILITIES = {
  HP: "HP",
  ATACK: "こうげき",
  DEFENSE: "ぼうぎょ",
  SP_ATK: "とくこう",
  SP_DEF: "とくぼう",
  AGILITY: "すばやさ",
} as const;

export type Abilities = (typeof ABILITIES)[keyof typeof ABILITIES];
