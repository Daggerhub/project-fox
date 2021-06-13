import React from "react";
import Backdrop from "./components/backdrop";
import {
  AppShellContainer,
  AppShellWrapper,
  NavStage,
  ContentStage,
} from "./app-shell.styles";

type AppShellProps = {
  children: React.ReactNode;
};

function AppShell({ children }: AppShellProps): JSX.Element {
  return (
    <AppShellContainer>
      <Backdrop />
      <AppShellWrapper>
        <NavStage>Nav</NavStage>
        <ContentStage>{children}</ContentStage>
      </AppShellWrapper>
    </AppShellContainer>
  );
}

export default AppShell;
