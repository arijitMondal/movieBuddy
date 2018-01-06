import { Model, attr, many } from 'redux-orm';

class Artist extends Model {
  static reducer(action, ArtistList, session) {}
}

Artist.modelName = 'Artist';
Artist.fields = {
  id: attr(),
  movies: many('Movie', 'movies'),
};

Artist.defaultProps = {
  movies: [],
};

export default Artist;
