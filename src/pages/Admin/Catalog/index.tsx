import { CatalogContainer } from "./styles";
import { useGetProductsQuery } from "../../../store/products/productsSlice";

import { formatPrice } from "../../../utils/formatPrice";
import { MdInventory } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { InputWSearchIcon } from "../../../components/Input";
import { AiOutlinePlus } from "react-icons/ai";
import { formatDate } from "../../../utils/formateDate";
import { useState } from "react";
import { ICoffeeType } from "../../../types";

enum Tabs {
  "allItems",
  "activeds",
  "disableds",
}

export function Catalog() {
  const { data: products } = useGetProductsQuery();

  const [selectedTab, setSelectedTab] = useState(Tabs.allItems);
  const [selectedItems, setSelectedItems] = useState<ICoffeeType[]>([]);

  const [search, setSearch] = useState("");

  function handleAddItems(product: ICoffeeType, e: any) {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, product]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item.idProduto !== product.idProduto)
      );
    }
  }

  return (
    <CatalogContainer>
      <header>
        <MdInventory />
        <h1>Itens do Inventário</h1>
      </header>

      <section className="container">
        <div className="table">
          <div className="table-tabs">
            <button
              onClick={() => setSelectedTab(Tabs.allItems)}
              className={
                "tab " + (selectedTab === Tabs.allItems ? "active" : "")
              }
            >
              Todos
              <span>
                {products?.reduce((prev, _current) => {
                  return prev + 1;
                }, 0)}
              </span>
            </button>
            <button
              onClick={() => setSelectedTab(Tabs.activeds)}
              className={
                "tab " + (selectedTab === Tabs.activeds ? "active" : "")
              }
            >
              Ativos
              <span>
                {products?.reduce((prev, current) => {
                  if (current.situacao === "ATIVO") return prev + 1;
                  return prev;
                }, 0)}
              </span>
            </button>
            <button
              onClick={() => setSelectedTab(Tabs.disableds)}
              className={
                "tab " + (selectedTab === Tabs.disableds ? "active" : "")
              }
            >
              Inativos
              <span>
                {products?.reduce((prev, current) => {
                  if (current.situacao === "INATIVO") return prev + 1;
                  return prev;
                }, 0)}
              </span>
            </button>
          </div>

          <div className="table-content">
            <div className="table-menu">
              <button>
                <AiOutlinePlus />
                Novo Item
              </button>
              <div className="table-buttons">
                <InputWSearchIcon
                  placeholder="Pesquisar..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button>
                  <IoMdTrash />
                </button>
              </div>
            </div>

            <div className="table-data">
              <div className="header">
                <input type="checkbox" />
                <p></p>
                <p>Nome</p>
                <p>Quantidade</p>
                <p>Vendidos</p>
                <p>Preço</p>
                <p>Data</p>
                <p>Status</p>
              </div>
              {products
                ?.filter((product) => {
                  if (
                    (selectedTab === Tabs.activeds &&
                      product.situacao === "ATIVO") ||
                    (selectedTab === Tabs.disableds &&
                      product.situacao === "INATIVO") ||
                    selectedTab === Tabs.allItems
                  ) {
                    return (
                      search.toLowerCase() === "" ||
                      product.nome.toLowerCase().includes(search.toLowerCase())
                    );
                  }
                })
                .map((product) => (
                  <div className="body" key={product.idProduto}>
                    <input
                      type="checkbox"
                      onClick={(e) => handleAddItems(product, e)}
                    />
                    <img
                      src={`data:image/png;base64, ${product.imagem}`}
                      alt="Imagem do Café"
                    />
                    <p>{product.nome}</p>
                    <p>{product.qtProduto}</p>
                    <p>112</p>
                    <p>R$ {formatPrice(product.preco)}</p>
                    <p>{formatDate(product.dtCriacao!)}</p>
                    <p
                      className={
                        product.situacao === "ATIVO" ? "actived" : "disabled"
                      }
                    >
                      {product.situacao}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </CatalogContainer>
  );
}
