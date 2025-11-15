"use client";
import { Provider } from "react-redux";
import store from "./store";
import Session from "./Account/session";
import KambazNavigation from "./Navigation";
import "./styles.css";

export default function KambazLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <Session>
        <div id="wd-kambaz">
          <KambazNavigation />
          <div className="wd-main-content-offset bg-light p-3 shadow">
            {children}
          </div>
        </div>
      </Session>
    </Provider>
  );
}