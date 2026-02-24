// Application Architecture || Define Imports
// =======================================================================================
// =======================================================================================
import { whiteListProcedure } from "@/server/trpc"
import { PlayersListInputs, PlayersListOutputs, TPlayersListItem } from "./PlayersListIO"

// Application Architecture || Define Fake Data
// =======================================================================================
// =======================================================================================
const fakePlayers: TPlayersListItem[] = [
  { id: "1317d9f6-fe96-11eb-a367-92d3e5fff94e", name: "Michael Jordan", imageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/ccdbaa0cb2d541bcaf8f396f429f6fbb?size=400", teamName: "The William Herrels", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/0616c75b7f6048ba9200c61cbe5ac953?size=400", nationality: "Antigua and Barbuda", age: 52, height: 198, weight: 88, bib: null },
  { id: "b73ad4a1-61e7-11ee-99ee-1fe234d06103", name: "Giannis Ougko Antetokounmpo", imageURL: null, teamName: "Golden Pine Athletics", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/85b499cf190f46aca5ff6d848953170e?size=400", nationality: null, age: null, height: null, weight: null, bib: null },
  { id: "007fca9e-b996-11ec-b441-8d71764a7053", name: "Ђорђе Петровић", imageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/269b70648dfe47c693ac6b1f8f919480?size=400", teamName: "The William Herrels", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/0616c75b7f6048ba9200c61cbe5ac953?size=400", nationality: "Bahamas", age: 2, height: null, weight: null, bib: null },
  { id: "099fa787-3816-11ee-8dbc-1d3809fd7a1a", name: "Brandao", imageURL: null, teamName: "The William Herrels", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/0616c75b7f6048ba9200c61cbe5ac953?size=400", nationality: "Portugal", age: 30, height: 188, weight: 76, bib: null },
  { id: "09c2f702-7d39-11eb-9c66-fe1e9a830728", name: "Test Person11", imageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/05d361d32a4f46e786b5bcfa74efcb5f?size=400", teamName: "Ringwood Hawks", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/e0766caaf6864a559ce3b5e1c1649df7?size=400", nationality: "Australia", age: null, height: null, weight: null, bib: "32" },
  { id: "0a4bdd96-7d49-11eb-a081-8ea018037fc5", name: "Cody Lindsay", imageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/7bdcea2ef5aa40bf9943caa328547a7c?size=400", teamName: "Gibraltar", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/2656f6f8e170478c85a9e741b9554767?size=400", nationality: "Australia", age: null, height: null, weight: null, bib: null },
  { id: "0bfe7cef-6119-11ee-918d-877d439ef6ae", name: "Elliot Ness", imageURL: null, teamName: "The William Herrels", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/0616c75b7f6048ba9200c61cbe5ac953?size=400", nationality: "Åland Islands", age: null, height: null, weight: null, bib: null },
  { id: "5e30b3c0-0023-11ec-a12c-8a5d7d7e7f62", name: "Arijan Komazec", imageURL: null, teamName: "Armenia", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/c4c0b3a4e4834d7d8a9bb9e5e3b66948?size=400", nationality: "Croatia", age: 29, height: 200, weight: 100, bib: null },
  { id: "94a071ba-0b05-11ec-b675-fee82176f090", name: "Brianna Skinner", imageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/7d5d402bc216429a875fffecd95bce59?size=400", teamName: "Golden Pine Athletics", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/85b499cf190f46aca5ff6d848953170e?size=400", nationality: "Uganda", age: 25, height: 177, weight: 65, bib: null },
  { id: "327b93a0-7d4a-11eb-9b43-ee3e3c2fe10f", name: "Jeremy-Jake Hollander", imageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/8dd25577c38f418d8c9bde5a2ca9b626?size=400", teamName: "The Amber Robersons", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/279efbadef9241edb20597abadbf625b?size=400", nationality: "Australia", age: 45, height: 180, weight: 100, bib: null },
  { id: "e63c9364-7d48-11eb-bf7a-466d25656bd1", name: "Jason Cameron", imageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/86ca4f707bd3499fb2c630dbbb838018?size=400", teamName: "The William Herrels", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/0616c75b7f6048ba9200c61cbe5ac953?size=400", nationality: "Australia", age: null, height: null, weight: null, bib: null },
  { id: "5c23eb96-4bbf-11ec-b010-d2d1d05e1a56", name: "Scooney Penn", imageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/d9fa3a8c917746389cb4631b8300ceaf?size=400", teamName: "Armenia", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/c4c0b3a4e4834d7d8a9bb9e5e3b66948?size=400", nationality: "Bosnia and Herzegovina", age: 4, height: 183, weight: 77, bib: null },
  { id: "dc3024a8-7d48-11eb-a081-8ea018037fc5", name: "Baydn Cosgriff", imageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/a0ca45022d4245978aaccea0a8a980ca?size=400", teamName: "Golden Pine Athletics", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/85b499cf190f46aca5ff6d848953170e?size=400", nationality: "Australia", age: null, height: null, weight: null, bib: null },
  { id: "75a3ca12-7d4a-11eb-a53c-3a7b48771164", name: "Jack Walsh", imageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/12525307ceb64a78951daea79dec587c?size=400", teamName: "Gibraltar", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/2656f6f8e170478c85a9e741b9554767?size=400", nationality: "Australia", age: null, height: null, weight: null, bib: null },
  { id: "f3791f5c-7d48-11eb-a081-8ea018037fc5", name: "William Lawrie", imageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/881d096d49d64249acd9dddc219cca84?size=400", teamName: "Ringwood Hawks", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/e0766caaf6864a559ce3b5e1c1649df7?size=400", nationality: "Australia", age: null, height: null, weight: null, bib: "90" },
  { id: "a0d4d27d-f961-11ed-907c-3998587ae27c", name: "Izmael Urzaiz", imageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/e5aeab46709a4cb8a12bf4c20ebc0c26?size=400", teamName: "Ringwood Hawks", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/e0766caaf6864a559ce3b5e1c1649df7?size=400", nationality: "Spain", age: 52, height: null, weight: null, bib: "89" },
  { id: "2b1232ee-b996-11ec-8400-733ef34e7ff3", name: "Mina Šarlamanova", imageURL: null, teamName: "Ringwood Hawks", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/e0766caaf6864a559ce3b5e1c1649df7?size=400", nationality: null, age: 19, height: 167, weight: 54, bib: "87" },
  { id: "6a147691-8f40-11ec-bf3b-6d51a6004f1c", name: "Katherine Teodorakis", imageURL: null, teamName: "The Amber Robersons", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/279efbadef9241edb20597abadbf625b?size=400", nationality: "North Macedonia", age: 34, height: null, weight: null, bib: null },
  { id: "16991780-7d49-11eb-bf7a-466d25656bd1", name: "Ethan Fiegert", imageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/2aa11ad8c6424794906550fbd7f5986a?size=400", teamName: "Waverly", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/2ad3f26ff8004be19672f0436fe7fbbd?size=400", nationality: "Australia", age: null, height: null, weight: null, bib: null },
  { id: "feb9ccd6-7d48-11eb-a081-8ea018037fc5", name: "Joshua Fiegert", imageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/54fc73bd94604c3c8d6dae67afd4c3fc?size=400", teamName: "Waverly", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/2ad3f26ff8004be19672f0436fe7fbbd?size=400", nationality: "Australia", age: null, height: null, weight: null, bib: null },
  { id: "34e01a48-61e8-11ee-93d9-9f73b4f6bdda", name: "Julius Robert Oppenheimer", imageURL: null, teamName: "Golden Pine Athletics", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/85b499cf190f46aca5ff6d848953170e?size=400", nationality: null, age: null, height: null, weight: null, bib: null },
  { id: "5ae32464-95b3-11ec-9018-576bbaed6cd8", name: "Albi Wilkinson", imageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/00d982e93cd148c883b1609b4ef1df11?size=400", teamName: "Armenia", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/c4c0b3a4e4834d7d8a9bb9e5e3b66948?size=400", nationality: null, age: null, height: null, weight: null, bib: null },
  { id: "22b7fd10-7d49-11eb-bf7a-466d25656bd1", name: "Blake Thomas", imageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/7eba32c0d7974230a84ee6ff8941f879?size=400", teamName: "Gibraltar", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/2656f6f8e170478c85a9e741b9554767?size=400", nationality: "Australia", age: null, height: null, weight: null, bib: null },
  { id: "300051b6-7d49-11eb-bf7a-466d25656bd1", name: "Jaydo Wright", imageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/1d5dd3e6d70c4e96a066fa22b3c827a0?size=400", teamName: "The Amber Robersons", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/279efbadef9241edb20597abadbf625b?size=400", nationality: "Australia", age: null, height: null, weight: null, bib: null },
  { id: "55299c6c-7d4a-11eb-88a3-668d6c663c91", name: "David Denboer", imageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/d43cdc45c5264afb9ac9b644db987eed?size=400", teamName: "Knox", teamImageURL: "https://images.dc.prod.cloud.atriumsports.com/b180w/cf09b9daaee7425ba4f092f2d3625645?size=400", nationality: "Australia", age: null, height: null, weight: null, bib: "56" },
]

// Application Architecture || Define Exports
// =======================================================================================
// =======================================================================================
export const PlayersList = whiteListProcedure
  .meta({
    openapi: {
      method: "GET",
      protect: true,
      path: "/players/list",
      summary: "PlayersList() -> Returns a list of all players.",
      tags: ["Players"],
    },
  })
  .input(PlayersListInputs)
  .output(PlayersListOutputs)
  .query(async ({ input, ctx: { script } }) => {
    await script.insight("Players list query")

    const filtered = input.search
      ? fakePlayers.filter((p) => p.name.toLowerCase().includes(input.search!.toLowerCase()))
      : fakePlayers

    const totalRecords = filtered.length
    const start = (input.page - 1) * input.pageSize
    const players = filtered.slice(start, start + input.pageSize)

    return {
      players,
      pagination: {
        page: input.page,
        pageSize: input.pageSize,
        totalPages: Math.ceil(totalRecords / input.pageSize),
        totalRecords,
      },
    }
  })
