function RestaurantCard() {
  return (
    <div style={{ background: "#fff", paddding: "10px", borderRadius: "5px" }}>
      <img src={data.image} alt="" style={{ width: "100%", height: "150" }} />
      <h3>{data.restaurantName}</h3>
      <p>{data.address}</p>
      <p>{data.type}</p>
      <p>{data.parkingLot ? "Available" : "Not Available"}</p>

      {isAdmin && (
        <>
          <button
            onClick={onUpdate}
            style={{ background: "green", color: "#fff", marginRight: "5px" }}
          />
          <button
            onClick={onDelete}
            style={{ background: "red", color: "#fff", marginRight: "5px" }}
          />{" "}
        </>
      )}
    </div>
  );
}
export default RestaurantCard;
