// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export function getTeamsInitials(name: string) {
  const words = name.trim().split(/\s+/)
  return words.length > 1
    ? words.map((w) => w[0]).join("").toUpperCase()
    : name.slice(0, 2).toUpperCase()
}
