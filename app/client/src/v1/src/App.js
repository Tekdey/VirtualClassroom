import React, {useEffect} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import UserAvatar from "./component/logo/UserAvatar";
import MenuButton from "./component/menu/MenuButton";
import NavbarMenu from "./component/menu/NavbarMenu";
import SettingDropDownMenu from "./component/menu/SettingDropDownMenu";
import Classroom from "./page/Classroom";
import Home from "./page/Home";
import SignIn from "./page/SignIn";
import AuthenticatedRoute from "./utils/AuthenticatedRoute";

const App = () => {
  const location = useLocation();

  return (
    <div className={location.pathname !== "/auth" ? "flex h-screen" : ""}>
      {location.pathname !== "/auth" && (
        <NavbarMenu>
          <div className="flex flex-col items-center justify-around w-full gap-10">
            <UserAvatar src="/assets/image/default_user.png" />
            <MenuButton>Profil</MenuButton>
            <SettingDropDownMenu>
              <MenuButton>Menu1</MenuButton>
              <MenuButton>Menu2</MenuButton>
              <MenuButton>Menu3</MenuButton>
            </SettingDropDownMenu>
          </div>
        </NavbarMenu>
      )}
      <Routes>
        <Route path="/auth/" element={<SignIn />} />

        <Route element={<AuthenticatedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/live/:id" element={<Classroom />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
