import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 80vw;
  margin: 0 auto;

  height: 10rem;

  .logo {
    height: 4rem;
  }

  .user-section {
    display: flex;
    gap: 1.2rem;

    .local,
    .cart {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.7rem;
      padding: 1rem;
      border-radius: 0.6rem;

      img {
        height: 1.6rem;
      }
    }

    .local {
      font-size: 1.4rem;
      color: var(--purple-dark);
      background-color: var(--purple-light);

      img {
        filter: invert(21%) sepia(44%) saturate(2785%) hue-rotate(242deg)
          brightness(86%) contrast(104%);
      }
    }

    .cart {
      background-color: var(--yellow-light);

      img {
        filter: invert(64%) sepia(69%) saturate(4982%) hue-rotate(14deg)
          brightness(96%) contrast(82%);
      }
    }
  }
`;
