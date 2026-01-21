export default function LeftSideBar() {
  const items = [
    "Appliances",
    "Phones & Tablets",
    "Health & Beauty",
    "Home & Office",
    "Electronics",
    "Fashion",
    "Supermarket",
    "Computing",
    "Baby Products",
    "Gaming",
    "Musical Instruments",
    "Other categories",
  ];

  return (
    <div className="bg-white rounded shadow-sm">
      {items.map((item) => (
        <div
          key={item}
          className="px-3 py-2 border-bottom sidebar-item"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
