import { ORM } from 'redux-orm';
import { Movie, Artist, Genre } from './models';

const orm = new ORM();
orm.register(Movie, Artist, Genre);
export default orm;
