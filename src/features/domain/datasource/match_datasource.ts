export interface MatchDatasource<GetMatchesResponse, GetMatchResponse> {
  getMatches(): Promise<GetMatchesResponse>;
  getMatch(id: string): Promise<GetMatchResponse>;
}
