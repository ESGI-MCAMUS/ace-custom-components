export const convertTypeToTitile = (type: string) => {
  switch (type) {
    case "message":
      return "un message";
    case "room":
      return "un feed";
    case "user":
      return "un utilisateur";
    default:
      return type;
  }
};

export const selectValue = [
  { value: "IDENTITY_THEFT", text: "Vol d'identité" },
  { value: "SPAM", text: "Spam" },
  { value: "HACKED_ACCOUNT", text: "Compté piraté" },
  { value: "INAPROPIATE_CONTENT", text: "Contenu inaproprié" },
  { value: "OTHER", text: "Autre" },
];
