export const randomName = () => {
  const adjectives = ["Brzi", "Ljuti", "Ludi", "Zločesti", "Divlji"];
  const nouns = [
    "Darth Vader",
    "Obi-Van Kenobi",
    "General Griveous",
    "Kapetan Rex",
    "Luke Skywalker",
  ];
  const randomIndex = () => Math.floor(Math.random() * adjectives.length);

  return `${adjectives[randomIndex()]} ${nouns[randomIndex()]}`;
};
