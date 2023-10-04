import styled from "styled-components";

const headerHeigth = "64px";

export const CatalogContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 8rem);

  border-left: 1px solid rgba(0, 0, 0, 0.15);
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 8rem;

  header {
    background-color: #fff;
    height: ${headerHeigth};
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    position: relative;

    padding: 12px 38px;

    svg {
      width: 2rem;
      height: 2rem;
      color: var(--purple);
      position: relative;
    }

    &::before {
      content: "";
      background-color: var(--purple-light);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      left: 2.75rem;
    }

    h1 {
      font-family: Roboto;
      font-size: 2.4rem;
      font-weight: 400;
    }
  }

  .container {
    height: calc(100% - ${headerHeigth});
    width: 100%;

    padding: 24px;
  }

  .table {
    height: 100%;
    position: relative;
    z-index: 11;
  }

  .table-tabs {
    height: 48px;
    display: flex;
    font-size: 16px;
    gap: 15px;

    .tab {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 5px;

      padding: 20px 16px;
      border-radius: 6px 6px 0px 0px;
      background-color: var(--purple-extra-light);

      span {
        font-size: 10px;
        position: relative;
        color: var(--title);

        background-color: #c59df7;
        border-radius: 8px;
        padding: 4px 10px;
      }
    }

    .tab.active {
      background: #fff;
      cursor: default;

      span {
        background-color: var(--purple);
        color: #fff;
      }
    }
  }

  .table-content {
    background-color: #fff;
    width: 100%;
    height: calc(100% - 48px);

    overflow-y: scroll;
    padding: 32px 20px;

    .table-menu {
      display: flex;
      justify-content: space-between;
      position: sticky;
      width: 100%;
      top: 0;
      left: 0;
      flex-wrap: nowrap;

      &:before {
        content: "";
        background: #fff;
        position: absolute;
        width: 100%;
        height: 250%;
        top: 0;
        transform: translateY(-50%);
        z-index: -1;
        border-bottom: 1px solid var(--input);
      }

      > button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 16px;

        color: #fff;
        font-size: 16px;
        background-color: var(--purple);
        border-radius: 6px;
      }

      .table-buttons {
        display: flex;
        gap: 20px;

        input {
          border-radius: 6px;
          height: 22.4px;
        }

        button {
          width: 48px;
          height: 48px;
          color: var(--label);

          background-color: var(--button);
          border-radius: 6px;
          display: grid;

          place-items: center;
          font-size: 2.4rem;
        }
      }
    }

    .table-data {
      .header,
      .body {
        display: grid;
        grid-template-columns: 0.1fr 0.5fr 1.5fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        justify-items: left;

        padding: 16px 0;
        font-size: 16px;
        color: var(--label);

        border-bottom: 1px solid var(--input);

        & > :not(:first-child):not(:nth-child(2)):not(:nth-child(3)) {
          margin: auto;
        }
      }

      .header {
        margin-top: 12px;
        position: sticky;
        top: 50px;
        background-color: #fff;
      }

      .body {
        color: var(--title);
        border-top: 1px solid var(--input);

        .actived,
        .disabled {
          padding: 5px 10px;
          border-radius: 99rem;

          font-size: 14px;
        }

        .actived {
          color: var(--green-label-text);
          background-color: var(--green-label-bg);
        }

        .disabled {
          color: var(--red-label-text);
          background-color: var(--red-label-bg);
        }
      }

      img {
        width: 46px;
        height: 46px;
        margin: auto;
      }
    }
  }

  @media (max-width: 1024px) {
    header {
      width: 100%;
    }

    .container {
      .table {
        z-index: 11;
        padding-top: 16px;
      }
    }

    .table-content {
      .table-data {
        .header,
        .body {
          grid-template-columns: 0.1fr 0.8fr 1.5fr 1fr 1fr 1fr 1fr 1fr;
        }
      }
    }
  }

  @media (max-width: 768px) {
    border: none;

    header {
      padding: 1rem;

      &::before {
        content: "";
        position: absolute;
        left: 0;
      }

      &::after {
        content: "";
        position: absolute;
        background-color: #fff;
        width: 100vw;
        height: 100%;
        left: -20px;
        z-index: -11;
      }
    }

    .container {
      padding: 0;

      .table {
        z-index: 1;
      }
    }
  }

  @media (max-width: 425px) {
    header {
      display: none;
    }
    .table-tabs {
      gap: 2px;
    }

    .table-content {
      position: absolute;
      overflow-x: hidden;

      .table-menu {
        flex-wrap: wrap;
        row-gap: 8px;

        &::before {
          height: 100%;
        }

        .table-buttons {
          width: 100%;
          gap: 5px;
        }
      }

      .table-data {
        .header,
        .body {
          grid-template-columns: 0.1fr 1fr 1fr 1fr 1fr;

          &
            > :not(:first-child):not(:nth-child(2)):not(:nth-child(3)):not(
              :nth-child(6)
            ):not(:nth-child(8)) {
            display: none;
          }
        }
      }
    }
  }
`;
