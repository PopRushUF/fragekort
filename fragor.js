// ============================================================
//  FRÅGOR
//  Ett spelkort per kategori. När kortet skannas slumpas en fråga
//  som lobbyn inte haft än. Lägg till så många rader du vill:
//      ["Fråga", "Svar"],
//  Byt bara ut den här filen när du lägger till frågor –
//  de tryckta korten behöver aldrig göras om.
// ============================================================

export const CATS = {
  ALL:  { name: "Allmänbildning", color: "#2F6FED" },
  GEO:  { name: "Geografi",       color: "#1E9E6A" },
  FILM: { name: "Film & TV",      color: "#E0457B" },
  MUS:  { name: "Musik",          color: "#8A5CF6" },
  HIS:  { name: "Historia",       color: "#C98F0A" },
  SPO:  { name: "Sport",          color: "#EE7422" },
};

export const Q = {
  ALL: [
    ["TESTFRÅGA: Hur många ben har en spindel?", "8"],
    ["TESTFRÅGA: Vem målade Mona Lisa?", "Leonardo da Vinci"],
  ],
  GEO: [
    ["TESTFRÅGA: Vad heter Australiens huvudstad?", "Canberra"],
    ["TESTFRÅGA: Vilken är Sveriges största sjö?", "Vänern"],
  ],
  FILM: [
    ["TESTFRÅGA: Vad heter staden där familjen Simpson bor?", "Springfield"],
    ["TESTFRÅGA: Vem spelar Jack i Titanic?", "Leonardo DiCaprio"],
  ],
  MUS: [
    ["TESTFRÅGA: Vilket år vann ABBA Eurovision med Waterloo?", "1974"],
    ["TESTFRÅGA: Vilken svensk DJ gjorde låten Levels?", "Avicii"],
  ],
  HIS: [
    ["TESTFRÅGA: Vilket år föll Berlinmuren?", "1989"],
    ["TESTFRÅGA: Vilket år sjönk Titanic?", "1912"],
  ],
  SPO: [
    ["TESTFRÅGA: I vilken sport tävlar man om Stanley Cup?", "Ishockey"],
    ["TESTFRÅGA: Hur lång är ett maratonlopp?", "42,195 km"],
  ],
};
