export const translatePokemonType = (type: "grass" | "poison") => {
  switch (type) {
    case "grass":
      return "くさ";
    case "poison":
      return "どく";
    default:
      return "なし";
  }
};
