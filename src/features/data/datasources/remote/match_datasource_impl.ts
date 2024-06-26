import {Either, left, right} from '@sweet-monads/either';
import {MatchDatasource} from '../../../domain/datasource/match_datasource';
import {Match} from '../../../domain/entities/match';
import {Player} from '../../../domain/entities/player';
import {Failure, FailureFactory} from '../../../domain/entities/failure';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../core/firebase/initialization';
import { MatchModel } from '../../models/match_model';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const createID = () => `${Math.floor(Math.random() * 10000) + 1}`;

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
    result: {
      homeTeam: Math.floor(Math.random() * 10) + 1,
      awayTeam: Math.floor(Math.random() * 10) + 1,
    },
  }));

// implementacion de la interfaz - reemplazar por llamada a la api
export class MatchDatasourceImpl implements MatchDatasource<Match[], Match> {
  async getMatches(): Promise<Either<Failure, Match[]>> {
    //  const matches: Match[] = createMatches(10);
    try {
      console.log( await getDocs(collection(db, 'matches')));
      const querySnapshot = await getDocs(collection(db, 'matches'));
      if (querySnapshot.empty) {
        return left(FailureFactory.unexpected({message: 'No se encontraron documentos.'}),);
      }
      console.log(querySnapshot);
      const matches = querySnapshot.docs.map(doc => MatchModel.fromJson(doc.data()));
      querySnapshot.docs.map(doc => {
        console.log(MatchModel.fromJson(doc.data()));
      });
      console.log(matches.length);

      return right(matches);
    } catch (error) {
      console.log(error);
      return left(
        FailureFactory.unexpected({message: 'Ocurrió un error inesperado'}),
      );
    }
  }

  async getMatch(id: string): Promise<Either<Failure, Match>> {
    const match: Match = createMatches(1)[0];

    try {
      await delay(2000);

      return right(match);
    } catch (error) {
      return left(
        FailureFactory.unexpected({message: 'Ocurrió un error inesperado'}),
      );
    }
  }
}
