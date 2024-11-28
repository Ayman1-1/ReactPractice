import React, { useState } from "react";

function Show() {
  const peoples = [
    { id: 1, name: "ayman" },
    { id: 2, name: "hanine" },
    { id: 3, name: "hiba" },
  ];
  const paragraph =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, omnis velit. Sint doloremque eaque expedita, enim aperiam, error quia ipsam, exercitationem dolores pariatur similique vitae inventore! Rerum dicta quidem laudantium deserunt quo error. Deserunt modi, culpa nam vitae veritatis suscipit alias temporibus asperiores iusto? Sed voluptates qui possimus repellendus quaerat mollitia minus veritatis quibusdam doloribus, neque, eius eaque expedita ut dicta at aliquam pariatur placeat officia quisquam facere? Ipsam commodi placeat et ut saepe aliquid itaque amet, culpa, harum illum exercitationem distinctio quo blanditiis! Vero veniam eaque non officia accusantium veritatis aliquid sunt, ullam accusamus dolor, similique et vitae a eligendi molestias illo mollitia dolorum possimus magnam maxime incidunt sit natus unde rerum! Quasi, error. Culpa aliquid omnis ullam tempora?";
  const [show, setShow] = useState(true);

  const handelClick = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <>
      <p>{show ? paragraph : paragraph.slice(0, 80) + "... "}</p>
      <button onClick={handelClick}>{show ? "Show Less" : "Show more"}</button>
    </>
  );
}

export default Show;
