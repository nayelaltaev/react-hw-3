import ContainUp from "../Containers/ContainUp";
import Input from "../–°omponents/Input";

import Button from "../–°omponents/Button";
import TextContain from "../Containers/TextContain";
import ContainDown from "../Containers/ContainDown";

import "./Style.css";
import Header from "../–°omponents/Header";

function Home() {
  return (
    <>
      <div className="block">
        <ContainUp />
        <Header />
        <Input />
        <Button />
        <TextContain />
        <ContainDown />
      </div>
    </>
  );
}

export default Home;
