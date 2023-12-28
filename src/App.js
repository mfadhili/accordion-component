import {useState} from "react";

function App() {

  return (
    <div className="app">
      <Accordion data={faqs}/>
    </div>
  );
}

function Accordion({data}) {
    const [currOpen, setCurrOpen] = useState(null);

  return (
      <div className={"accordion"}>
        {data.map((dataItem, index) => (
            <AccordionItem title={dataItem.title} num={index} key={dataItem.title} currOpen={currOpen} setCurrOpen={setCurrOpen} >
                {dataItem.text}
            </AccordionItem>
        ))}
      </div>
  );
}

function AccordionItem({title, text, num,currOpen, setCurrOpen,children }) {

    const isOpen = currOpen === num;

    function handleToggle(num) {
        setCurrOpen(isOpen ? null: num);
    }

    return (
      <div className={`item ${isOpen ? `open`: ``}`} onClick={() => handleToggle(num)}>
        <p className="number">{num < 9 ? `0${num + 1}`: num + 1}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>

          {
              isOpen && (
                  <div className="content-box">
                      {children}
                  </div>
              )
          }

      </div>
  );
}


const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
        "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
        "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];


export default App;
