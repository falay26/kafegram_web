import Button from "@mui/material/Button";

const PageTitle = ({ title, total, banner, setVisible, totalPrice }) => {
  return (
    <div className="page_title_container">
      <h1>{title} Sayfası</h1>
      {total ? <h1>Toplam: {total}</h1> : null}
      {totalPrice ? <h1>Toplam fiyat: {totalPrice} €</h1> : null}
      {banner === true ? (
        <Button onClick={() => setVisible(true)} color="primary" variant="text">
          Reklam Ekle
        </Button>
      ) : null}
    </div>
  );
};

export default PageTitle;
