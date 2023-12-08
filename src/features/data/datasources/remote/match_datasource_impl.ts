import {MatchDatasource} from '../../../domain/datasource/match_datasource';
import {Match} from '../../../domain/entities/match';
import {Player} from '../../../domain/entities/player';
import {collection, doc, getDoc, getDocs} from 'firebase/firestore';
// creador de mocks
import {db} from '../../../core/firebase/initialization';
const createID = () => `${Math.floor(Math.random() * 1000) + 1}`;

const createPlayers = (count: number): Player[] =>
  Array.from({length: count}, (_, i) => ({
    id: createID(),
    name: `Player ${i}`,
    lastName: `Player ${i}`,
    email: `player-${i}@example.com`,
    position: 'Player',
    rating: Math.floor(Math.random() * 10) + 1,
  }));

const createMatches = (count: number): Match[] =>
  Array.from({length: count}, (_, i) => ({
    id: createID(),
    homeTeam: {
      id: createID(),
      name: 'Home Team',
      players: createPlayers(5),
    },
    awayTeam: {
      id: createID(),
      name: 'Away Team',
      players: createPlayers(5),
    },
    dateTime: new Date(),
    location: 'Location',
    name: 'Match',
    status: 'Scheduled',
    result: '0-0',
  }));

// implementacion de la interfaz - reemplazar por llamada a la api
export class MatchDatasourceImpl implements MatchDatasource<Match[], Match> {
  async getMatches(): Promise<Match[]> {
    // const matches: Match[] = createMatches(10);
    const querySnapshot = await getDocs(collection(db, 'matches'));
    // let matches;
    // querySnapshot.forEach((doc) => {
    //   matches.push(doc.data());
    // });
    if (querySnapshot.empty) {
      return Promise.reject('No documents found');
    }

    const matches: Match[] = querySnapshot.docs.map(doc => doc.data() as Match);
    console.log(matches);
    return Promise.resolve(matches);
  }

  async getMatch(id: string): Promise<Match> {
    const match: Match = createMatches(1)[0];

    return Promise.resolve(match);
  }
}
