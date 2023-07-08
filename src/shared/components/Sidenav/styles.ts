import styled from "styled-components";

export const SidenavContainer = styled.nav`
  padding: 5rem 3rem;
  width: 25rem;
  height: 100vh;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: self-start;
  position: absolute;
  left: 0;
  gap: 5rem;

  font-size: 1.8rem;
  font-weight: 700;
  color: var(--black-300);
  background-color: var(--background);

  .logo {
    width: 15rem;
    padding: 1rem;
  }

  .nav-menu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .sub-title {
      color: #69697c;
      padding: 0 1rem;
      cursor: default;
    }
  }

  a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem;
    border-radius: 6px;
    gap: 0.5rem;

    &:hover {
      background-color: var(--button);
    }
  }

  border-right: 1px solid var(--button);
  box-shadow: 1px 0px 6px 0px rgba(0, 0, 0, 0.15);

  .mobile-only {
    display: none;
  }

  .desktop-only {
    display: initial;
  }

  @media (max-width: 768px) {
    left: -25rem;
    margin-top: 6rem;
    height: calc(100vh - 6rem);

    .mobile-only {
      display: initial;
    }

    .desktop-only {
      display: none;
    }

    .header {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 6rem;
      background-color: var(--background);
      border-bottom: 1px solid var(--button);
      box-shadow: 1px 0px 6px 0px rgba(0, 0, 0, 0.15);

      display: flex;
      align-items: center;
      padding: 0 2rem;

      font-size: 2rem;

      button {
        position: relative;

        &:active::before {
          z-index: -1;
          content: "";
          width: 150%;
          height: 120%;
          position: absolute;
          background-color: var(--button);
          transform: translate(-5px, -4px);
          border-radius: 99px;
        }
      }

      img {
        position: absolute;
        top: 0;
        left: 50%;

        height: 6rem;

        transform: translateX(-50%);
      }
    }
  }
`;
