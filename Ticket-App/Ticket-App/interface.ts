export type EmptyStateProps = {
  text: string;
};
export type TicketType = {
  id: string;
};
export type TicketProps = {
  onDelete: () => void;
};

export type Movie = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: any;
  genres: string[];
};

export type MovieState = {
  movies: Movie[];
  featuredMovie: Movie;
  currentIndex: number;
  nextMovie: () => void;
};

export type datesType = {
  day: string;
  date: string;
  className?: string;
};
export type dashboardMoviesType = {
  id: string;
};
