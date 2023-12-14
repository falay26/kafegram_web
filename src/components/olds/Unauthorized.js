import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section>
      <h1>Yektiniz bulunmuyor!</h1>
      <br />
      <p>Maalesef bu sayfaye erişmek için gerekli yetkiye sahip değilsiniz.</p>
      <div className="flexGrow">
        <button onClick={goBack}>Geri Dön!</button>
      </div>
    </section>
  );
};

export default Unauthorized;
