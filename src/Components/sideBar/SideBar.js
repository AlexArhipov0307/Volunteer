import React from "react";
import { CSSTransition } from "react-transition-group";
import { SideBarContainer } from "./SideBarStyled";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

const Sidebar = ({ children, isSideBarOpen }) => {
  return (
    <SideBarContainer>
      <CSSTransition
        in={isSideBarOpen}
        timeout={200}
        classNames='overlay'
        unmountOnExit>
        {(stage) => (
          <div className='modalContainer'>
            <CSSTransition
              in={stage === "entered"}
              timeout={200}
              classNames='modal'
              mountOnEnter
              unmountOnExit>
              <div className='modalSidebar'>
                {children}
                <div className='hrLine'></div>
                <div className='switcher'>
                  <p>Темная тема</p>
                  <ThemeSwitcher />
                </div>
                <div className='hrLine'></div>
              </div>
            </CSSTransition>
          </div>
        )}
      </CSSTransition>
    </SideBarContainer>
  );
};

export default Sidebar;
