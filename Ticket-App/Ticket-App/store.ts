import { create } from "zustand";
import { Movie, MovieState } from "./interface";

export const useMovieStore = create<MovieState>((set, get) => {
  const movies: Movie[] = [
    {
      id: "1",
      title: "AVATAR:",
      subtitle: "Fire and Ash",
      description:
        "Jake Sully and Neytiri&apos;s family grapples with grief after Jake and Neteyam&apos;s death, encountering a new, aggressive Na&apos;vi tribe, the Ash People, who are led by the fiery Varang, as the conflict on Pandora escalates and a new moral focus emerges.",
      image: require("../Ticket-App/assets/images/Avatar.jpg"),
      genres: ["Action", "Fantasy", "Science Fiction", "Adventure"],
    },
    {
      id: "2",
      title: "IS THIS THING ON?",

      description:
        "Kevin Hart returns to the stage with his signature high-energy comedy, delivering hilarious observations about family life, aging, and the absurdities of modern society, while reflecting on his evolution as a comedian and the lessons learned from navigating fame, fatherhood, and the relentless pace of his career.",
      image: require("../Ticket-App/assets/images/IsThisThingOn.png"),
      genres: ["Action", "Drama", "Science Fiction"],
    },
    {
      id: "3",
      title: "THE BATMAN:",
      subtitle: "Vengeance Rises",
      description:
        "In his second year of fighting crime, Batman uncovers corruption in Gotham City while pursuing the Riddler, a sadistic serial killer targeting Gotham's elite, forcing the Dark Knight to confront his own family's dark secrets and redefine what justice means in a city drowning in decay.",
      image: require("../Ticket-App/assets/images/Batman.jpg"),
      genres: ["Action", "Crime", "Drama", "Thriller"],
    },
  ];

  return {
    movies,
    currentIndex: 0,
    featuredMovie: movies[0],
    nextMovie: () => {
      const nextIndex = (get().currentIndex + 1) % movies.length;
      set({
        currentIndex: nextIndex,
        featuredMovie: movies[nextIndex],
      });
    },
  };
});
