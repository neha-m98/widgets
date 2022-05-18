import "./App.css";
import "./Style.css";
import Accordian from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Route from "./components/Route";
import { useState } from "react";
import Translate from "./components/Translate";
import Header from "./components/Header";

const items = [
  {
    title: "Global voices",
    content:
      "Global Voices collects blogs and translated blog overviews from all over the world, albeit with with a certain emhpasis on low-income countries.",
  },
  {
    title: "The Long War Journal",
    content:
      "The Long War Journal (blog) is dedicated to providing original and accurate reporting and analysis of the Long War (also known as the Global War on Terror). This is accomplished through its programs of embedded reporters, news and news aggregation, maps, podcasts, and other multimedia formats.",
  },
  {
    title: "Freakonomics",
    content:
      "Freakonomics (Blog): Authors Steven Levitt, Stephen Dubner and guest contributors blog about the hidden side of the economy.",
  },
  {
    title: "Legal Theory Blog",
    content:
      "Legal Theory Blog (Blog) is Professor Lawrence B. Solum’s blog on a range of international and legal issues",
  },
  {
    title: "Strange maps - Cartographic curiosities",
    content:
      "Strange maps - Cartographic curiosities (Blog) collects and comments on all kinds of intriguing maps—real, fictional, and what-if ones—and has been writing the Strange Maps blog since 2006.",
  },
  {
    title: "The Monkey Cage",
    content:
      "The Monkey Cage (Blog) is a wide-spectrum political science blog with a self-appointed remit to ”publicize political science research; to provide informed commentary on political events and issues; to think aloud; and to indulge [the authors’] non-academic interests",
  },
];

const options = [
  {
    label: "A Little Devil in America by Hanif Abdurraqib",
    value:
      "A finalist for the National Book Award, Hanif Abdurraqib’s work of cultural criticism is an astonishing accounting of Black performance. In essays full of snappy prose, Abdurraqib analyzes everything from the rise of Whitney Houston to a schoolyard fistfight. The author, also a poet, seamlessly blends pop culture references with U.S. history and stories from his own upbringing. The connections that he makes between these stories—both small and large, intimate and collective—point to the enduring influence of Black art. He covers broad ground with ease and wit, an impressive balance for a book that is as bold as it is essential.",
  },
  {
    label: "Crying in H Mart by Michelle Zauner",
    value:
      "When Michelle Zauner, founder of the indie-rock band Japanese Breakfast, was 25 years old, her mother was diagnosed with terminal cancer. That illness and her mother’s eventual death shattered Zauner’s sense of self—and forced her to re-evaluate her relationship with her Korean culture. In her memoir, Zauner searches for answers about the influences that shaped so much of her life, often ruminating on the food her mother made for her. The memories associated with these dishes—jatjuk, gimbap, galbi—push the narrative along, and it’s food that becomes such a heartbreaking marker of her mother’s decline, particularly when chemotherapy makes it too difficult for her to eat. Remarkably honest and written in animated terms, Crying in H Mart is a potent and devastating portrait of a mother and daughter and the life that they shared.",
  },
  {
    label: "How the Word Is Passed by Clint Smith",
    value:
      "Amid a discussion of what students should be learning about history, Clint Smith, a poet and journalist, takes readers across the U.S.­—from the Monticello plantation in Virginia to a maximum-security prison in Louisiana—to underline the legacy of slavery and how it has shaped the country. The result, longlisted for the National Book Award, is an insightful dissection of the relationship between memory, history and America’s ongoing reckoning with its past.",
  },
  {
    label: "Invisible Child by Andrea Elliott",
    value:
      "For almost a decade, reporter Andrea Elliott observed the coming-of-age of a girl named Dasani, who has lived in and out of the New York City shelter system for most of her life. Dasani’s existence is full of contradictions—her Brooklyn shelter is just blocks away from some of the borough’s most expensive real estate—and Elliott is relentless in her efforts to capture them all. In exact and searing detail, she places Dasani’s story alongside the larger issues of inequality, homelessness and racism in the city and more broadly the U.S.",
  },
  {
    label: " Aftershocks by Nadia Owusu",
    value:
      "Born in Tanzania and raised all over the world, from England to Italy to Ethiopia, Nadia Owusu never felt she belonged anywhere. In her aching memoir, she embarks on a tour de force examination of her childhood, marked first by her mother’s abandoning her when she was a toddler and later by the death of her beloved father. Through assessing the people and places that shaped her, Owusu picks up the pieces of her life to make sense of it all. In lyrical and lush prose, she crafts an intimate and piercing exploration of identity, family and home.",
  },
  {
    label: "Finding the Mother Tree by Suzanne Simard",
    value:
      "In her first book, pioneering forest ecologist Suzanne Simard blends her personal history with that of the trees she has researched for decades. Finding the Mother Tree is as comprehensive as it is deeply personal, especially as Simard explores her curiosity about trees and what it has been like to work as a woman in a field dominated by men. Her passion for the subject at the book’s center is palpable on every page, coalescing into an urgent call to embrace our connection with the earth and do whatever we can to protect it.",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <br />
      <br />

      <Route path="/">
        <Accordian items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select the Title you want to Read!"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
