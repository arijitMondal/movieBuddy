import { Model, attr, many } from 'redux-orm';

class Movie extends Model {
  static reducer(action, MovieList, session) {}
}

Movie.modelName = 'Movie';
Movie.fields = {
  id: attr(),
  artists: many('Artist', 'artists'),
  genres: many('Genre', 'genres'),
};

Movie.defaultProps = {
  artists: [],
  genres: [],
};

export default Movie;
