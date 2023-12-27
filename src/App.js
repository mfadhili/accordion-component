import {useState} from "react";

function App() {

  return (
    <div className="app">
      <Accordion data={faqs}/>
    </div>
  );
}

function Accordion({data}) {
  return (
      <div className={"accordion"}>
        {data.map((dataItem, index) => (
            <AccordionItem title={dataItem.title} text={dataItem.text} num={index} key={dataItem.title}/>
        ))}
      </div>
  );
}

function AccordionItem({title, text, num}) {
    const [isOpen, setIsOpen] = useState(true);

    function handleToggle() {
        setIsOpen(!isOpen);
    }

    return (
      <div className={`item ${isOpen ? `open`: ``}`} onClick={handleToggle}>
        <p className="number">{num < 9 ? `0${num + 1}`: num + 1}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>

          {
              isOpen && (
                  <div className="content-box">
                      {text}
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
