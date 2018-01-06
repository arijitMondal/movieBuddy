import { Model, attr, many } from 'redux-orm';

class Genre extends Model {
  static reducer(action, GenreList, session) {}
}

Genre.modelName = 'Genre';
Genre.fields = {
  id: attr(),
  movies: many('Movie', 'movieGenre'),
};

Genre.defaultProps = {
  movies: [],
};

export default Genre;
