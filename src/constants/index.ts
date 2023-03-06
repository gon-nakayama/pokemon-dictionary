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
