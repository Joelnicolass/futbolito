import {createSlice} from '@reduxjs/toolkit';
import { MatchModel } from '../../../data/models/match_model';
import { Team } from '../../../domain/entities/team';
import { Match } from '../../../domain/entities/match';

interface HeaderState {
  title: string;
  subtitle: string;
  showAvatar: boolean;
}
const initTeam: Team = {
    id: '',
    name: '',
    players: []
}
const initialState: Match = {
    awayTeam: initTeam,
    dateTime: new Date(),
    homeTeam: initTeam,
    id: '',
    location: '',
    name: '',
    result:  {awayTeam: 0, homeTeam: 0},
    status: '',

};

export const matchSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setMatch: (state, action) => {
      return {...state,  ...action.payload};
    },
    setSubtitle: (state, action) => {
      state.subtitle = action.payload;
    },
    setShowAvatar: (state, action) => {
      state.showAvatar = action.payload;
    },
  },
});

export const match Actions = matchSlice.actions;
export default matchSlice.reducer;
