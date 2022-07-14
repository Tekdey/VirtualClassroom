import React from "react";
import Card from "../component/card/announcement/Card";
import Container from "../component/card/announcement/Container";
import Typography from "../component/card/announcement/Typography";
import NavbarMenu from "../component/menu/NavbarMenu";
import MenuButton from "../component/menu/MenuButton";
import UserAvatar from "../component/logo/UserAvatar";
import SettingDropDownMenu from "../component/menu/SettingDropDownMenu";

const Home = () => {
  return (
    <div className="flex h-screen w-full">
      <section className="flex flex-col py-5 md:p-10 gap-3 w-full">
        <Typography>Cours en direct</Typography>
        <Container>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Container>
        <Typography>Cours qui arrivent...</Typography>
        <Container>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Container>
      </section>
    </div>
  );
};

export default Home;
