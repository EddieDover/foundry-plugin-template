export type MockGlobal = typeof global & (
  { game: { user: { isGM: boolean }, settings: { get: jest.Mock } } }
)
