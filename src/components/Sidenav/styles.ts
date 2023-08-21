import styled from "styled-components";

export const SidenavContainer = styled.div`
  font-size: 1.6rem;
  position: fixed;
  left: 0;

  display: flex;
  flex-direction: row-reverse;

  header {
    width: calc(100vw - 25rem);
    background-color: #fff;
    height: 8rem;

    display: flex;
    align-items: center;

    padding-left: 3rem;

    border-left: 1px solid rgba(0, 0, 0, 0.15);

    input {
      width: 45rem;
    }
  }

  nav {
    width: 25rem;
    height: 100vh;

    div {
      height: 8.1rem;
      display: flex;
      align-items: center;
      background-color: #fff;
      padding-left: 3rem;
      
      box-shadow: 1px 0px 6px 0px rgba(0, 0, 0, 0.15);
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    }

    ul {
      padding: 0 2rem;
      height: 100%;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      & li:first-child {
        margin-top: 3rem;
      }

      li {
        font-weight: 700;
        color: var(--label);

        display: flex;
        align-items: center;
        gap: 2rem;

        padding: 1rem 2rem;
        cursor: pointer;

        svg {
          height: 2.4rem;
          width: 2.4rem;
          position: relative;
        }

        &:hover {
          background-color: var(--button);
          border-radius: 6px;
        }

        &.selected {
          color: var(--purple);
          position: relative;

          &::before {
            content: "";
            background-color: var(--purple-light);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            position: absolute;
            left: 1.2rem;
          }
        }
      }
    }
  }

  .mobile-only {
    display: none;
  }

  @media (max-width: 768px) {
    header {
      display: none;
    }

    nav {
      width: 50vw;

      div {
        position: relative;
        padding: 0;
        width: 100vw;
        background-color: #fff;
        justify-content: center;

        button {
          position: absolute;
          left: 0;
          width: 24px;
          height: 24px;
          margin-left: 2rem;
          color: var(--label);

          svg {
            width: 100%;
            height: 100%;
          }
        }
      }

      ul {
        padding: 0;
        transition: transform 200ms;
      }
    }

    .mobile-only {
      display: initial;
    }
  }
`;
