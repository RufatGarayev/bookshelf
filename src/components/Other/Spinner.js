import spinner from '../../assets/img/other/loadingSpinner.gif';

const Spinner = () => {
  return (
    <div className="spinner-wrapper" style={{ padding: '80px 0 100px'}}>
      <img
        src={spinner}
        style={{ width: "55px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  )
}

export default Spinner;