import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
  "skY3WtgUJNKueJYsyE65QnvimwN4MrnBTr2mmk7387n8jKoyPKZAjcXGswYQLHBMkwd7yi47L6AbCE8in0d3Xj6GKU9Vy0047syD8bbZ12Y4g1eX6HpDVXiAr4I1mQSQHuaJh0EbjV64RojUafw1pnIT2vFme9ApTSg7yK3EMkmo6S2ya72c",
})
