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

export type sofaType = {
  text?: string;
  color: string;
  className?: string;
  onSeatPress?: (id: string, number: string, isAvailable: boolean) => void;
};

export type seatType = {
  id: string;
  number: string;
  isAvailable: boolean;
};

export type SeatProps = {
  onSeatPress: (seat: seatType) => void;
  selectedSeats: seatType[];
};

export type ButtonProps = {
  name: string;
  text: string;
  onPress?: () => void;
  className?: string;
};
export type backButtonType = {
  onPress: () => void;
};
export type featherType = { onPress?: () => void };
