import React from "react";

const Header1 = ({ buttons }) => {
  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      {buttons &&
        buttons.map((button, index) => {
          const ButtonComponent = button.component;
          return (
            <ButtonComponent
              key={index}
              className="font-TAEBAEKmilkyway"
              value={button.value}
              onClick={button.onClick}
              icon={button.icon}
            />
          );
        })}
    </div>
  );
};

export default Header1;
